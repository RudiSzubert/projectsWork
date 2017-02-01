<?php
$response = new Answer($_REQUEST['action']);
//
class Answer
{
    public function __construct($data){
        $this->myConn();
        $this->method = $data;
        if(method_exists($this,$this->method))
        {
            $method = $data;
            $this->{$method}();
        }        
    }
    protected $validate_field=[
        'fullQData'=>['id','level','qval','ans1','ans2','ans3','ans4','correct']
    ];
    protected function execQuery($someQuery){
        try{
            $someQuery->execute();        
            }
        catch(PDOException $e){
            print "Query error " . $e->getMessage() . "<br/>";
            die();
            }        
    }
    protected function myConn(){
        try{
            $this->myConn = new PDO("mysql:host=127.0.0.1:3306;dbname=myDatabase", 'root', '');
            $this->myConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch (PDOException $e)
        {
            echo "Cannot connect to database " . $e->getMessage() . "<br/>";
            die();
        }        
    }
    protected function bindMyParams($someQuery){
        $myQuery = $this->myConn->query('SELECT id FROM Questions ORDER BY id DESC LIMIT 1');
        $myQuery->execute();
        $temps = $myQuery->fetchAll();
        $myID = $temps[0]['id']+1;
        foreach ($this->validate_field['fullQData'] as $key)
        {
            $someQuery->bindParam(':'.$key, $_GET[$key]=='new' ? $myID : $_GET[$key]);
        }        
    }    
    protected function add(){
        $conn = $this->myConn->prepare("INSERT INTO Questions(id, level, qval, ans1, ans2, ans3, ans4, correct) VALUES(:id,:level,:qval,:ans1,:ans2,:ans3,:ans4,:correct)");
        $this->bindMyParams($conn);
        $this->execQuery($conn);        
    }
    protected function modify(){
        $conn = $this->myConn->prepare("UPDATE Questions SET level=:level, qval=:qval, ans1=:ans1, ans2=:ans2, ans3=:ans3, ans4=:ans4, correct=:correct WHERE id=:id");
        $this->bindMyParams($conn);
        $this->execQuery($conn);     
    }
    protected function deleteRow(){
        $id=$_REQUEST['id'];
        $myQuery = $this->myConn->prepare("DELETE FROM questions WHERE id = :id");
        $myQuery->execute(array(':id'=>$id));        
    }
    protected function getAll(){
        $arr = [];
        $i=1;
        $myQuery = $this->myConn->prepare("SELECT * FROM questions ORDER BY id DESC");
        $myQuery->execute();
        while ($row = $myQuery->fetch(PDO::FETCH_ASSOC))
        {
            foreach ($this->validate_field['fullQData'] as $key)
            {
              $arr["Question $i"][$key]=$row[$key];
            }
            $i++;
        }
        echo json_encode($arr);        
    }
    protected function getQLevel(){
        $arr = [];
        $i = 1;
        $myQuery = $this->myConn->prepare("SELECT * FROM questions WHERE level = :level");
        $myQuery->bindParam(':level',$_REQUEST['level']);
        $myQuery->execute();
        while ($row = $myQuery->fetch(PDO::FETCH_ASSOC))
        {
            foreach ($this->validate_field['fullQData'] as $key)
            {
              $arr["Question $i"][$key] = $row[$key];
            }
            $i++;
        }
        echo json_encode($arr);         
    }
  
}
?>