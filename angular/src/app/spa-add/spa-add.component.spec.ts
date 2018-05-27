import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaAddComponent } from './spa-add.component';

describe('SpaAddComponent', () => {
  let component: SpaAddComponent;
  let fixture: ComponentFixture<SpaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
