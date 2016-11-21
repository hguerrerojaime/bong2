import { NgModule, Component, Injectable} from '@angular/core';
import { BongFormsModule } from '../components/index';
import { LookupService, UserService } from '../services/index';
import { singleChildRoute } from './routing.utils';

@Component({
	template:` 
		<panel title="Some Panel">
			This is another example <command-button brand="success" label="Click Me"></command-button>
		
			<input-richtext></input-richtext>
		</panel>
	`
})
class InfoPageComponent {}



@NgModule({
  declarations: [ InfoPageComponent ],
  imports: [
    BongFormsModule,
    singleChildRoute(InfoPageComponent)
  ]
})
export class InfoPageRouteModule {}