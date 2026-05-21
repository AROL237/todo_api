pipeline {
    agent { docker {image 'node:24' } }
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        IMAGE_TAG ="v1.0.0"
        NEXT_PUBLIC_API_BaseUrl ="/api"
    }
    stages {
        stage{
        steps("Init CICD"){
            sh''' 
            echo "$IMAGE_TAG"
            cat app.version
            echo app.version >IMAGE_TAG
            echo "$IMAGE_TAG"

            '''
            echo "---IMAGE_VERSION: ${IMAGE_TAG}---" 
        }
    }
        stage('Build') {
            steps{
                echo "building "
                sh '''

                '''
            }
        }
    }
    post{
        success {
            echo'SUCCESSFUL CICD'
           archiveArtifacts artifacts: '*', fingerprint: true
        }
        always{
             echo'Clean Workspace'
             cleanWs()
        }
        }
}
