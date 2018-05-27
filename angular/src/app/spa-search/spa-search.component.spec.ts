import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaSearchComponent } from './spa-search.component';

describe('SpaSearchComponent', () => {
  let component: SpaSearchComponent;
  let fixture: ComponentFixture<SpaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
