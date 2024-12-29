<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
error_reporting(0);
session_start();
$host="sql103.infinityfree.com:3306";

$user="if0_37264684";

$password="FXlYs5rE7ygoZdt";

$db="if0_37264684_schoolproject";


$data=mysqli_connect($host,$user,$password,$db);

if ($data===false) {
    die("Connection failed: " . $data->connect_error);
}


if($_SERVER["REQUEST_METHOD"]=="POST")
{ 
$name = $_POST['name'];
$pass = $_POST['password'];

$sql="select * from schoolproject where username='".$name."' AND password='".$pass."'";
$result=mysqli_query($data, $sql);

$row=mysqli_fetch_array($result);



if($row["usertype"]=="client")
{
$_SESSION["usertype"]="client";
$_SESSION['username']=$name;
header("location:sudent.php");
}



elseif($row["usertype"]=="admin")
{
$_SESSION["usertype"]="admin";
$_SESSION['username']=$name;
header("location:adminhome.php");
}



else{
    session_start();
    $message="Email or password does  not match";
    $_SESSION['loginmessage']=$message;
    header("location:login.php");

}
}
?>