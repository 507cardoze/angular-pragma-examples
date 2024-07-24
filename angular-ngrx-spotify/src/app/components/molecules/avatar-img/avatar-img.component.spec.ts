import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarImgComponent } from './avatar-img.component';

describe('AvatarImgComponent', () => {
  let component: AvatarImgComponent;
  let fixture: ComponentFixture<AvatarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarImgComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind @Input src correctly', () => {
    const testSrc = 'https://example.com/avatar.jpg';
    component.src = testSrc;
    fixture.detectChanges();
    expect(component.src).toBe(testSrc);
  });
});