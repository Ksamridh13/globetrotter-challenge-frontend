#!/bin/bash

# Install Java if not found
if ! command -v java &> /dev/null; then
  echo "Java not found, installing..."
  sudo apt update && sudo apt install -y openjdk-21-jdk
fi

# Set JAVA_HOME
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

echo "Using JAVA_HOME: $JAVA_HOME"
java -version

# Ensure mvnw is executable
chmod +x mvnw

# Run Maven build
./mvnw clean package

