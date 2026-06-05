
pipeline {
    agent any
    environment{
        IMAGE_NAME ="signing/todo_api"
        IMAGE_TAG ="1.0.${BUILD_NUMBER}"
    }
    stages{
        stage("CHECKOUT"){
            steps{
                echo "====++++ Executing CHECKOUT ++++===="
                checkout scm
            }        
        }
         stage("BUILD"){
            steps{
                echo "====++++ Executing BUILD ++++===="` 
                sh '''
                    docker --version
                    docker build -t "$IMAGE_NAME":"$IMAGE_TAG" .
                    docker images   
                '''
            }        
        }
        stage('SAVING ARTIFACT'){
            echo "====++++ Saving Artifact build to registry ++++===="
            script{
                dockerR
            }
            
        }

         stage("DEPLOYING TO ENVIRONMENT"){
            steps{
                echo "====++++ Executing DEPLOYMENT  ++++===="
            }        
        }
    }
   post{
     
       success{
           echo "====++++ Only when successful ++++===="
       }
       failure{
           echo "====++++ Only when failed ++++===="
       }
        always{
           echo "====++++ Always ++++===="
       }
    }
}
