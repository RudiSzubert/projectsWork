<?php 
     switch($_GET['data']){
          case '1':
              echo  '<div>1</div>';
              break;
          case '2':
              echo  '<div class="somePost">
                <h3>Post Title</h3>
                <span>02.04.2005 21:37</span>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>';
              break;
          case '3':
              echo  '<div>3</div>';
              break;
          case '4':
              echo  '<div>4</div>';
              break;
          case '5':
              echo  '<div>5</div>';
              break;
     }

