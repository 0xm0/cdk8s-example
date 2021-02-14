"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const cdk8s_1 = require("cdk8s");
describe('Placeholder', () => {
    test('Empty', () => {
        const app = cdk8s_1.Testing.app();
        const chart = new main_1.HelloChart(app, 'test-chart');
        const results = cdk8s_1.Testing.synth(chart);
        expect(results).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWtDO0FBQ2xDLGlDQUE4QjtBQUU5QixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxlQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxpQkFBVSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNoRCxNQUFNLE9BQU8sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIZWxsb0NoYXJ0fSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHtUZXN0aW5nfSBmcm9tICdjZGs4cyc7XG5cbmRlc2NyaWJlKCdQbGFjZWhvbGRlcicsICgpID0+IHtcbiAgdGVzdCgnRW1wdHknLCAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gVGVzdGluZy5hcHAoKTtcbiAgICBjb25zdCBjaGFydCA9IG5ldyBIZWxsb0NoYXJ0KGFwcCwgJ3Rlc3QtY2hhcnQnKTtcbiAgICBjb25zdCByZXN1bHRzID0gVGVzdGluZy5zeW50aChjaGFydClcbiAgICBleHBlY3QocmVzdWx0cykudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG4iXX0=