pipeline {
    agent any

    stages {
        stage('Docker Push') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub-nadarthu', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh '''
                            export DOCKER_HOST=tcp://host.docker.internal:2375
                            docker login -u $USERNAME -p $PASSWORD
                            docker tag nadarthu/node-web-app-v1:latest thulasinada/node-web-app-v1:latest
                            docker push thulasinada/node-web-app-v1:latest
                        '''
                    }
                }
            }
        }
        stage('Trigger Render Deployment') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'RenderDeployKey', variable: 'KEY')]) {
                        sh "curl https://api.render.com/deploy/$KEY"
                    }
                }
            }
        }        
    }
}
