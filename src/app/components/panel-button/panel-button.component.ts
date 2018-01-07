import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PanelActionService } from '../../services/panel-action/panel-action.service';
@Component({
  selector: 'app-panel-button',
  templateUrl: './panel-button.component.html',
  styleUrls: ['./panel-button.component.css']
})
export class PanelButtonComponent implements OnInit {
    @Input() buttonId: string;
    @Input() buttonLabel: string;
    @Output() onButtonPressed = new EventEmitter();

    public url: string;
    public glitching: boolean = false;
    public delay: number;
    public clicked: boolean = false;
  
    constructor(private panelActionService: PanelActionService) { }

    pressButton(content) {
        if(this.buttonId != null) {
            this.panelActionService.sendPanelAcction(this.buttonId);
        }
    }

    ngOnInit() { }
}
