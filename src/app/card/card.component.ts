/**
 * Created by Window on 5/18/2017.
 */
import  {Component, Input} from '@angular/core';

@Component({
    selector : 'card',
    templateUrl : 'card.template.html'
})

export  class CardComponent {
    @Input() header : String = "This is card header";
    @Input() footer : String = "This is card footer";

    constructor(){}
}