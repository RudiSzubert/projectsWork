<?php

    
    header('Content-Type: text/html; charset=utf-8');

//    if ($_SERVER['REMOTE_ADDR'] != '94.254.236.142') {
//        die('Nara!');
//    }
    
    session_start();
//    unset($_SESSION['User']);
    
    function PreFormat($param) {
        echo '<pre>';
        print_r($param);
        echo '</pre>';
    }
    
    
    require_once 'cfg/config.php';

    
    /*
     * Zalogowany
     */
    
    
    if (isset($_SESSION['User']) && $_SESSION['User'] != NULL) {
        
        // Czy dłużej niż minutę
        
        
        if ((time() - $_SESSION['User']['LastActive'] > 3600) || (isset($_GET['logout']) && $_GET['logout'] == 'true')) {
            unset($_SESSION['User']);
            header("HTTP/1.1 301 Moved Permanently");
            header('Location: /Front1');
        }
        else {
            $_SESSION['User']['LastActive'] = time();
        }
        
    // Zawartość
        
        include_once 'template/header.php';
        
        if ($_SESSION['User']['Type'] == 1) {
            include_once 'template/content_admin.php';
        }
        else if ($_SESSION['User']['Type'] == 2) {
            include_once 'template/content_player.php';
        }
        
        include_once 'template/footer.php';
        
    }
    
    /*
     * Niezalogowany
     */
    
    else {
        
        
        // Czy doszło do próby logowania
        
        if (isset($_POST['Login']) && $_POST['Login'] != NULL) { // TAK
            
            // Czy pomyślnie 
            
            if (($_POST['Login']['User'] == 'Admin' || $_POST['Login']['User'] == 'Gracz') && $_POST['Login']['Password'] == 'password') {
                $_SESSION['User']['Name'] = $_POST['Login']['User'];
                $_SESSION['User']['LoginTime'] = time();
                $_SESSION['User']['LastActive'] = time();
                if ($_POST['Login']['User'] == 'Admin') {
                    $_SESSION['User']['Type'] = 1;
                }
                else if ($_POST['Login']['User'] == 'Gracz') {
                    $_SESSION['User']['Type'] = 2;
                }
                header("HTTP/1.1 301 Moved Permanently");
                header('Location: /Front1');
            }
            else {
                echo 'błąd goopcze!';
                include_once 'template/forms/login_form.php';
            }
            
            
        }
        
        else { // NIE
            include_once 'template/forms/login_form.php';
        }
        
    }
    
    
    
//    include_once 'template/forms/login_form.php';
    
    
    


           
            
        