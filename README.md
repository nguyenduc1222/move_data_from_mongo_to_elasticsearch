# move_data_from_mongo_to_elasticsearch  
--------------------------------------------------------------------  
# Hướng dẫn cài Elasticsearch - UBUNTU 18 LTS  

1. Cài JAVA  
```
sudo apt-get update  
sudo apt install apt-transport-https  
sudo apt install openjdk-8-jdk  
java -version  
echo $JAVA_HOME  
sudo update-alternatives --config java  
sudo nano /etc/environment  
add 'JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64/jre" '  
source /etc/environment  
echo $JAVA_HOME  
```

2. Cài ELK  
```
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -  
sudo apt-get install apt-transport-https  
echo "deb https://artifacts.elastic.co/packages/6.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x.list  
sudo apt-get update && sudo apt-get install elasticsearch  
sudo /bin/systemctl daemon-reload  
sudo /bin/systemctl enable elasticsearch.service  
sudo systemctl start elasticsearch  
sudo systemctl stop elasticsearch  
sudo systemctl status elasticsearch  
```
-----------------------------------------------------------------------  
# Move dữ liệu lớn từ mongodb sang elk  
```  
wget https://github.com/compose/transporter/releases/download/v0.5.2/transporter-0.5.2-linux-amd64
sudo mv transporter-*-linux-amd64 /usr/local/bin/transporter  
chmod +x /usr/local/bin/transporter  
transporter init mongodb elasticsearch  
export MONGODB_URI='mongodb://localhost/demo'  
export ELASTICSEARCH_URI='http://localhost:9200/demo'  
nano tranform.js  
"CODE THAY ĐỔI DATA KHI CHUYỂN DATA"  
Sửa file pipeline.js  
ở dòng cuối  
t.Source("source", source, "/.*/").Transform(goja({"filename": "transform.js"})).Save("sink", sink, "/.*/")  

Hoặc chỉ thêm 1 bảng cb_instances bằng cách
t.Source("source", source, "/^cb_instances$").Save("sink", sink, "/.*/")

run  
transporter run pipeline.js   
```
-------------------------------------------------------------------------  
# Cho phép request từ xa  
```  
sudo nano /etc/elasticsearch/elasticsearch.yml  
/etc/elasticsearch/elasticsearch.yml  
network.host: 0.0.0.0  
cluster.name: myCluster1  
node.name: "myNode1"  
```
