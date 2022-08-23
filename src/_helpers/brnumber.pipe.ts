import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DirectivesModule } from './directives.module';
import { SafePipe } from './safe.pipe';

@Pipe({
	name: 'timeleftPercent'
})
export class TimeLeftPercent implements PipeTransform {

	constructor() { }
	transform(value: any, startdate: any, enddate: any, circum: number) {
		if (startdate && enddate && circum) {
			let o = new Date(startdate).getTime();
			let p = new Date(enddate).getTime();
			let l = p - o;
			let k = new Date().getTime();
			let pr: any = (l > 0 && p > k) ? (((p - k) / l) * 100).toFixed(2) : 0;
			pr = pr > 100 ? 100 : pr;
			const offset = (circum) - pr / 100 * circum;
			return offset + 100 > circum ? offset : offset + 100;
		} return 0;
	}
}





@Pipe({
	name: 'brnumber'
})
export class BrNumberPipe implements PipeTransform {

	constructor() { }
	transform(value: any) {
		let b = (!isNaN(value)) ? parseFloat(value).toLocaleString('pt-BR', {
			maximumFractionDigits: 2, minimumFractionDigits: 2
		}) : 0;
		return b ? b.toString().replace(/\./g, ' ') : b;
	}

}

@Pipe({
	name: 'hyphenRm'
})
export class removeHyphen implements PipeTransform {

	constructor() { }
	transform(value: any) {
		return (value) ? value.replace(/-/g, "") : value;
	}

}

@Pipe({
	name: 'europeanLocal'
})
export class euroLocal implements PipeTransform {

	constructor() { }
	transform(value: any) {
		let num = parseInt(value)
		return num.toLocaleString() + '.00';
	}

}




@Pipe({
	name: 'chatTimeAgo'
})


@Pipe({
	name: 'uptoTwoDecimal'
})
export class UptoTwoDecimalPipe implements PipeTransform {

	transform(value: any, upto?: any) {
		let decimal = 2
		if (upto)
			decimal = upto;
		let c = value.toString();
		c = c.split('.');
		c[1] = c[1] ? c[1].substr(0, decimal) : '00';
		c = c.join('.');
		return parseFloat(c);
	}

}

@NgModule({
	declarations: [
		BrNumberPipe,
		TimeLeftPercent,
		removeHyphen,
		SafePipe,
		UptoTwoDecimalPipe,
		euroLocal

	],
	imports: [
		DirectivesModule
	],
	exports: [
		BrNumberPipe,
		TimeLeftPercent,
		removeHyphen,
		SafePipe,
		DirectivesModule,
		UptoTwoDecimalPipe,
		euroLocal

	],

})
export class SharingModule {
}
