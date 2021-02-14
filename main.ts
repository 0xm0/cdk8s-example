import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';

import { KubeDeployment, KubeService } from "./imports/k8s";


export class HelloChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);
    //***********************************************************/
    //We're just doing this so we output a yml in the dist folder,
    //you could rewrite this manually and it'd be easier but it's
    //a better option to do it like this, but doing it like this
    //will give us a better advantage on types and this language
    //***********************************************************/

    const label = { app: "hello-k8s"};

    new KubeDeployment(this, "deployment", {
      spec: {
        replicas: 2,
        selector: {
          matchLabels: label,
        },
        template: {
          metadata: {
            labels: label,
          },
          spec: {
            containers:[
              {
               name: "hello-kubernetes",
               image: "paulbouwer/hello-kubernetes:1.7",
               ports: [
                 {
                   containerPort: 8080,
                 }
               ] 
              }
            ]
          }
        }

      }
    })

    new KubeService(this, "service", {
      spec: {
        type: "NodePort",
        ports: [
          {
            nodePort: 32000,
            port: 8080
          }
        ],
        selector: label,
      }
     })




  }
}

    //****************************************/
    //Now deploy into your local node cluster
    //
    //        Use npm run build
    //****************************************/



const app = new App();
new HelloChart(app, 'hello');
app.synth();
