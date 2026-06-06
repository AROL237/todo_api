
pipeline {
    agent { node { label 'docker' } }
    environment{
        IMAGE_NAME ="signing/todo_api"
        IMAGE_TAG ="1.0.${BUILD_ID}"
    }
    stages{
        
        stage("checkout"){
            agent { node { label 'docker' } }

            steps{
                echo "====++++ checkout code ++++====" 
                checkout scm
                echo "checkout completed."
                sh 'ls -l '
            }        
        }
        stage("BUILD"){
            agent { node { label 'docker' } }

            steps{
                echo "====++++ Executing BUILD ++++===="
                sh '''
                    docker --version
                    docker build -t "$IMAGE_NAME":"$IMAGE_TAG" .
                    docker images   
                '''
            }        
        }
        stage('SAVING ARTIFACT'){
            agent { node { label 'docker' } }
            steps{
                echo "====++++ Saving Artifact build to registry ++++===="

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred'
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]){
                sh '''
                    echo $PASS | docker login -u $USER --password-stdin >logs.txt

                    docker push ${IMAGE_NAME}:${IMAGE_TAG} >> logs.txt
                    cat logs.txt
                '''}

            }
        }
           
        stage("DEPLOYING TO ENVIRONMENT"){
            agent { node { label 'docker' } }

            steps{
                echo "====++++ Executing DEPLOYMENT  ++++===="
                sh '''
                    helm upgrade --install totoapp ./todoapp -f ./todoapp/values.yaml -f /home/jenkins/value-secret.yml --set backend.image.tag=${IMAGE_TAG}
                    printf "\n application deployed to KUBERNETES!!!!\n"
                    helm list  -A > depl-logs.txt

                '''
            }        
        }
    }
}
