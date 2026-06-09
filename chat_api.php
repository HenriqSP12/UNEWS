<?php
// chat_api.php
header('Content-Type: application/json');

// Recebe a mensagem do JavaScript
$dados = json_decode(file_get_contents('php://input'), true);
$mensagemUsuario = $dados['mensagem'] ?? '';
$idioma = $dados['idioma'] ?? 'pt';

if (empty($mensagemUsuario)) {
    echo json_encode(['resposta' => 'Mensagem vazia.']);
    exit;
}

include 'config.php';

// Prompt de Sistema: Define a "personalidade" e as regras do bot
$systemPrompt = "Você é o assistente virtual do UNews, um portal de notícias universitário focado em acessibilidade. 
Você deve responder de forma curta, amigável e direta.
O usuário está navegando no idioma: $idioma. Responda neste idioma.
Funcionalidades do site: Botão 'A+' aumenta a fonte, botão 'Alto Contraste' inverte as cores, botão 'Ouvir Notícia' lê o texto em voz alta. As categorias são Jornal, Esportes e Entretenimento.";

// Exemplo de payload para a API do Gemini (adapte se usar outra)
$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" . $apiKey;
$payload = json_encode([
    "system_instruction" => [
        "parts" => [["text" => $systemPrompt]]
    ],
    "contents" => [
        ["role" => "user", "parts" => [["text" => $mensagemUsuario]]]
    ]
]);

// Configuração do cURL para fazer a requisição HTTP
// Configuração do cURL para fazer a requisição HTTP
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

// ESSA LINHA É CRUCIAL PARA O LOCALHOST: Ela desativa a verificação de SSL que o XAMPP costuma barrar
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

$response = curl_exec($ch);

// 1. Verifica se o cURL (o servidor local) deu algum erro antes mesmo de chegar no Google
if(curl_errno($ch)){
    echo json_encode(['resposta' => 'Erro interno do cURL: ' . curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);
$resultado = json_decode($response, true);

// 2. Verifica se o Google devolveu algum erro (ex: Chave inválida, formato errado)
if (isset($resultado['error'])) {
    echo json_encode(['resposta' => 'Erro do Google: ' . $resultado['error']['message']]);
    exit;
}

// 3. Se tudo deu certo, pega a resposta. Se vier um formato estranho, ele mostra a resposta crua para debug.
$respostaIA = $resultado['candidates'][0]['content']['parts'][0]['text'] ?? 'Resposta inesperada da API: ' . $response;

// Devolve para o JavaScript
echo json_encode(['resposta' => $respostaIA]);
?>