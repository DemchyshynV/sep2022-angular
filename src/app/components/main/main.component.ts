import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {MyService} from "../../services/my.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  myObservable$:Observable<any[]>

  @Input()
  asd = 15;

  @ViewChild('inpt')
  myInput: ElementRef;

  @ViewChild(ChildComponent)
  child: ChildComponent

  constructor(private changeDetectorRef: ChangeDetectorRef, private myService: MyService) {
    console.log('constructor');
    console.log(this.asd);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.asd);
    this.myObservable$ = this.myService.getAll()
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log(this.myInput.nativeElement);
    this.child.hello()
    this.child.name = 'Olha'
    this.changeDetectorRef.detectChanges()
    this.child.ngOnInit()
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


}
