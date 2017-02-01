<?php



    if (isset($_POST['CForm']) && $_POST['CForm'] != NULL) {
       
        $error = False;
       
        if (strlen($_POST['CForm']['Name']) < 3) {
            $error = True;
            echo 'Za krótkie Imię';
        }
        
        if (is_numeric($_POST['CForm']['Phone']) === False || strlen($_POST['CForm']['Phone']) < 9) {
            $error = True;
            echo 'Nieprawidłowy numer tel';
        }
        
        
        if ($error === True) {
            echo 'źle!!!!!!!!!!!!!!!!!!!!';
            include_once 'template/forms/contact_form.php';
        }
        else {
            mail();
            echo 'Super! Jesteś zwycięzcą!';
            // Wysyłamy
        }
        
        
    }

    else {
        include_once 'template/forms/contact_form.php';
    }
    