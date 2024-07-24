import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoImageComponent } from './logo-image.component';

describe('LogoImageComponent', () => {
  let component: LogoImageComponent;
  let fixture: ComponentFixture<LogoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default typeLogo as "full"', () => {
    expect(component.typeLogo).toEqual('full');
    expect(component.logoFull).toEqual('/assets/images/logo_letters.png');
  });

  it('should update logo URL when typeLogo changes to "partial"', () => {
    component.typeLogo = 'partial';
    fixture.detectChanges(); // Update the view to reflect the new input
    expect(component.logoParcial).toEqual('/assets/images/logo_only.png');
  });
});