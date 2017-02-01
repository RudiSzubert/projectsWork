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
        'fullMData'=>['id','title','year','description','type','duration']
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
	protected function getPic(){
		$myStr = $_REQUEST['title'];
		$arr = explode(' ', $myStr);
		$myStr = implode('.',$arr);
		$url = 'http://www.filmweb.pl/'.$myStr.'/posters';
		$data = file_get_contents( $url );
		if( preg_match('#class="posterLightbox"><a href="javascript:void\(0\)" class="imageBorderShadow film_mini"><img src="(.+?)" alt=".+?" title=".+?"></a></div>#i', $data, $out)) {
			echo $out[1];
		}
	}
	
    protected function bindMyParams($someQuery){
        $myQuery = $this->myConn->query('SELECT id FROM MOVIES ORDER BY id DESC LIMIT 1');
        $myQuery->execute();
        $temps = $myQuery->fetchAll();
        $myID = $temps[0]['id']+1;
        foreach ($this->validate_field['fullMData'] as $key)
        {
            $someQuery->bindParam(':'.$key, $_GET[$key]=='new' ? $myID : $_GET[$key]);
        }        
    }    
    protected function add(){
        $conn = $this->myConn->prepare("INSERT INTO MOVIES(id, title, year, description, type, duration) VALUES(:id,:title,:year,:description,:type,:duration)");
        $this->bindMyParams($conn);
        $this->execQuery($conn);        
    }
    protected function getAll(){
        $arr = [];
        $i=1;
        $myQuery = $this->myConn->prepare("SELECT * FROM MOVIES ORDER BY id DESC");
        $myQuery->execute();
        while ($row = $myQuery->fetch(PDO::FETCH_ASSOC))
        {
			$tempArr = [];
            foreach ($this->validate_field['fullMData'] as $key)
            {
				$tempArr[$key] = $row[$key];
              //$arr[$i][$key]=
            }
            $i++;
			$arr[] = $tempArr;
        }
        echo json_encode($arr);        
    }
}
?>