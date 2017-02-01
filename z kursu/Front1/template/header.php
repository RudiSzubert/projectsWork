<html>
    
     
    <head>
        
        <title><?php echo $GlobalData['title']; ?></title>
        
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        
        <link rel="stylesheet" type="text/css" href="<?php echo $GlobalData['template']?>/assets/css/style.css" />
        
        <script type="text/javascript" src="<?php echo $GlobalData['template']?>/assets/js/jquery-3.1.0.js"></script>
        <script type="text/javascript" src="<?php echo $GlobalData['template']?>/assets/js/system.js"></script>
        
    </head>
    
    
    <body>
        
        <div id="page">
            
            
            <div id="Header" class="Container">
                
                <div id="User">
                    <div class="Login">
                        <span class="Label">Zalogowałeś się o:</span>
                        <span class="value"><?php echo date('d-m-Y H:i:s', $_SESSION['User']['LoginTime']); ?></span>
                    </div>
                    <div class="Info">
                        <span class="Label">Witaj:</span>
                        <span class="Value"><?php echo $_SESSION['User']['Name']; ?></span>
                    </div>
                </div>
                
                <div id="logo">
                    <a href="/">
                        <img src="images/logo.jpg" alt="Logo" />
                    </a>
                </div>
                
                <div id="Menu">
                    <ul class="Menu">
                        <li><a href="/">E1</a></li>
                        <li><a href="/">E2</a></li>
                        <li><a href="/">E3</a></li>
                        <li><a href="/">E4</a></li>
                        <li><a href="index.php?logout=true">Wyloguj</a></li>
                    </ul>
                </div>
                
            </div>