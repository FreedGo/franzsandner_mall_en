<?php
//钢琴一级查询
	require('../../class/connect.php'); //引入数据库配置文件和公共函数文件
	require('../../class/db_sql.php'); //引入数据库操作文件
	$link=db_connect(); //连接MYSQL
	$empire=new mysqlquery(); //声明数据库操作类
	
	$fenlei2=$_POST['fenlei2'];
	

$sql=$empire->query("select * from {$dbtbpre}ecms_photo where classid in($fenlei2) and isgood >= 1");
while($r=$empire->fetch($sql))
{
	$arr[] = array('titleurl' => $r[titleurl], 'titlepic' => $r[titlepic], 'title' => $r[title], 'futitle' => $r[futitle], 'money' => $r[money], 	'teacher_type' => $r[teacher_type],'address' => $r[address], 'follownum' => $r[follownum]);
}
echo json_encode($arr);	
?>