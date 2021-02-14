import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';

import { KubeDeployment } from "./imports/k8s";


export class HelloChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    new KubeDeployment(this, "deployment", {
      spec: {
        replicas: 2,
        selector: {
          matchLabels: {
            app: "hello-k8s",
          }
        },
        template: {
          metadata: {
            labels: {
              app: "hello-k8s",
            },
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

  }
}

const app = new App();
new HelloChart(app, 'hello');
app.synth();
