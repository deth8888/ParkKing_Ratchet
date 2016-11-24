<?php

//MOBILE API


header('Access-Control-Allow-Origin: *'); //Should work in Cross domain ajax Calling request


$mysql_hostname = "localhost";
$mysql_user = "tonsqknx_parking";
$mysql_password = "P@ssword1227";
$mysql_database = "tonsqknx_parking";

$con = mysqli_connect($mysql_hostname, $mysql_user,$mysql_password,$mysql_database); //website

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

if(isset($_GET['type']))
{
    if($_GET['type'] == "login")
	{
		$username = $_GET['username'];
		$password = $_GET['password'];
        
		//Create Query
		$query = "Select * from users Where name='$username' and password='$password'";
		//Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "Got Error While Logging In.";
        }
	}
        else if($_GET['type'] == "list")
	{
		//Create Query
		$query = "Select * from parking";
        //Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "An Error has Occured.";
        }
	}
     
    
}
?>