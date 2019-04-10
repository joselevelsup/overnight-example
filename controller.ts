import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("example")
export default class ExampleCtrler {
	@Get()
	private getExample(req: Request, res: Response): any {
		return res.json({
			"success": true,
			"data": "hellow"
		});
	}
}
