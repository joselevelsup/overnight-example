import { Server } from "@overnightjs/core";
import ExampleCtrler from './controller';

class APIServer extends Server {

	constructor(){
		super();
		this.setupControllers();
	}

	private setupControllers(): void {
		super.addControllers([new ExampleCtrler()]);
	}

	public start(port?: number): void {
		port = port || 3000;

		this.app.listen(port, () => {
			console.log("server started");
		});
	}
}

export default APIServer;
