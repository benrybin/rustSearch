import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RustlistComponent } from './rustlist.component';

describe('RustlistComponent', () => {
  let component: RustlistComponent;
  let fixture: ComponentFixture<RustlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RustlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RustlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
