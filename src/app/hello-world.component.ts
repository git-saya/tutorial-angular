import { Component } from '@angular/core'
import { Logger } from './logger.service'

@Component({
	selector: 'hello-world',
	templateUrl: './hello-world.component.html',
	styles: [`h2, p {font-family: sans-serif}`]
})

export class HelloWorldComponent {
	judul = "Hello Angular."
	nama_gambar = 'assets/angular.jpg'
	active = false
	count = 0

	constructor(private logger: Logger) { }

	hello(name) {
		this.judul = `Hello ${name.toUpperCase()}`
	}

	onEditClick() {
		this.active = !this.active
	}

	increment() {
		this.logger.writeCount(this.count)
		this.count++
	}
}