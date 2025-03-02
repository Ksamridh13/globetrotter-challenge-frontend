apt-get update && apt-get install -y openjdk-17-jdk
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

#!/bin/bash
export JAVA_HOME=/opt/render/project/java
chmod +x mvnw
./mvnw clean package

