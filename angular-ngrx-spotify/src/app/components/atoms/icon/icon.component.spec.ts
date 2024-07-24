import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from '@components/atoms/icon/icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle iconClass input', () => {
    const testIconClass = 'fa fa-test';
    component.iconClass = testIconClass;
    fixture.detectChanges(); // Update the view to reflect the new input value
    expect(component.iconClass).toBe(testIconClass);
  });
});