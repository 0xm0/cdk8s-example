"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloChart = void 0;
const cdk8s_1 = require("cdk8s");
const k8s_1 = require("./imports/k8s");
class HelloChart extends cdk8s_1.Chart {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        //***********************************************************/
        //We're just doing this so we output a yml in the dist folder,
        //you could rewrite this manually and it'd be easier but it's
        //a better option to do it like this, but doing it like this
        //will give us a better advantage on types and this language
        //***********************************************************/
        const label = { app: "hello-k8s" };
        new k8s_1.KubeDeployment(this, "deployment", {
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
                        containers: [
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
        });
        new k8s_1.KubeService(this, "service", {
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
        });
    }
}
exports.HelloChart = HelloChart;
//****************************************/
//Now deploy into your local node cluster
//
//        Use npm run build
//****************************************/
const app = new cdk8s_1.App();
new HelloChart(app, 'hello');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUNBQStDO0FBRS9DLHVDQUE0RDtBQUc1RCxNQUFhLFVBQVcsU0FBUSxhQUFLO0lBQ25DLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBb0IsRUFBRztRQUMvRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4Qiw4REFBOEQ7UUFDOUQsOERBQThEO1FBQzlELDZEQUE2RDtRQUM3RCw0REFBNEQ7UUFDNUQsNERBQTREO1FBQzVELDhEQUE4RDtRQUU5RCxNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsQ0FBQztRQUVsQyxJQUFJLG9CQUFjLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNyQyxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFO29CQUNSLFdBQVcsRUFBRSxLQUFLO2lCQUNuQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFO3dCQUNSLE1BQU0sRUFBRSxLQUFLO3FCQUNkO29CQUNELElBQUksRUFBRTt3QkFDSixVQUFVLEVBQUM7NEJBQ1Q7Z0NBQ0MsSUFBSSxFQUFFLGtCQUFrQjtnQ0FDeEIsS0FBSyxFQUFFLGlDQUFpQztnQ0FDeEMsS0FBSyxFQUFFO29DQUNMO3dDQUNFLGFBQWEsRUFBRSxJQUFJO3FDQUNwQjtpQ0FDRjs2QkFDRDt5QkFDRjtxQkFDRjtpQkFDRjthQUVGO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsSUFBSSxpQkFBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDL0IsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsSUFBSSxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLEtBQUs7YUFDaEI7U0FDRCxDQUFDLENBQUE7SUFLTCxDQUFDO0NBQ0Y7QUF6REQsZ0NBeURDO0FBRUcsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6QyxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUkvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IEFwcCwgQ2hhcnQsIENoYXJ0UHJvcHMgfSBmcm9tICdjZGs4cyc7XG5cbmltcG9ydCB7IEt1YmVEZXBsb3ltZW50LCBLdWJlU2VydmljZSB9IGZyb20gXCIuL2ltcG9ydHMvazhzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEhlbGxvQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDaGFydFByb3BzID0geyB9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvL1dlJ3JlIGp1c3QgZG9pbmcgdGhpcyBzbyB3ZSBvdXRwdXQgYSB5bWwgaW4gdGhlIGRpc3QgZm9sZGVyLFxuICAgIC8veW91IGNvdWxkIHJld3JpdGUgdGhpcyBtYW51YWxseSBhbmQgaXQnZCBiZSBlYXNpZXIgYnV0IGl0J3NcbiAgICAvL2EgYmV0dGVyIG9wdGlvbiB0byBkbyBpdCBsaWtlIHRoaXMsIGJ1dCBkb2luZyBpdCBsaWtlIHRoaXNcbiAgICAvL3dpbGwgZ2l2ZSB1cyBhIGJldHRlciBhZHZhbnRhZ2Ugb24gdHlwZXMgYW5kIHRoaXMgbGFuZ3VhZ2VcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgY29uc3QgbGFiZWwgPSB7IGFwcDogXCJoZWxsby1rOHNcIn07XG5cbiAgICBuZXcgS3ViZURlcGxveW1lbnQodGhpcywgXCJkZXBsb3ltZW50XCIsIHtcbiAgICAgIHNwZWM6IHtcbiAgICAgICAgcmVwbGljYXM6IDIsXG4gICAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgICAgbWF0Y2hMYWJlbHM6IGxhYmVsLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BlYzoge1xuICAgICAgICAgICAgY29udGFpbmVyczpbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIG5hbWU6IFwiaGVsbG8ta3ViZXJuZXRlc1wiLFxuICAgICAgICAgICAgICAgaW1hZ2U6IFwicGF1bGJvdXdlci9oZWxsby1rdWJlcm5ldGVzOjEuN1wiLFxuICAgICAgICAgICAgICAgcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBvcnQ6IDgwODAsXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIF0gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXcgS3ViZVNlcnZpY2UodGhpcywgXCJzZXJ2aWNlXCIsIHtcbiAgICAgIHNwZWM6IHtcbiAgICAgICAgdHlwZTogXCJOb2RlUG9ydFwiLFxuICAgICAgICBwb3J0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5vZGVQb3J0OiAzMjAwMCxcbiAgICAgICAgICAgIHBvcnQ6IDgwODBcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yOiBsYWJlbCxcbiAgICAgIH1cbiAgICAgfSlcblxuXG5cblxuICB9XG59XG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLy9Ob3cgZGVwbG95IGludG8geW91ciBsb2NhbCBub2RlIGNsdXN0ZXJcbiAgICAvL1xuICAgIC8vICAgICAgICBVc2UgbnBtIHJ1biBidWlsZFxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbm5ldyBIZWxsb0NoYXJ0KGFwcCwgJ2hlbGxvJyk7XG5hcHAuc3ludGgoKTtcbiJdfQ==