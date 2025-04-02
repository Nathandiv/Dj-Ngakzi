import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../Share-UI/navbar/navbar.component';
import { FooterComponent } from '../../Share-UI/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Event {
  date: string;
  day: string;
  venue: string;
  location: string;
  type: 'concert' | 'club';
  image: string;
  priceRange?: string;
  soldOut?: boolean;
}

interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit  {

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  currentSlide = 0;
  
  carouselSlides: CarouselSlide[] = [
    {
      title: 'Discover Inspired Living',
      subtitle: 'Explore Elevated Living',
      description: 'Discover elevated living at its finest with TP2 Furniture Shop. Our curated collection combines timeless elegance with modern flair, offering furnishings that redefine style and comfort.',
      image: 'https://i.pinimg.com/736x/7a/b5/23/7ab5239ab90c8e05116156a568426873.jpg',
      alt: 'Modern living room setup'
    },
    {
      title: 'Premium Comfort',
      subtitle: 'Experience Luxury',
      description: 'Indulge in the perfect blend of comfort and style with our premium furniture collection. Each piece is carefully selected to bring both functionality and elegance to your living space.',
      image: 'https://i.pinimg.com/474x/3c/9d/26/3c9d264c2d71651ea2395e4dfe95bd0a.jpg',
      alt: 'Luxury furniture showcase'
    },
    {
      title: 'Discover Inspired Living',
      subtitle: 'Explore Elevated Living',
      description: 'Discover elevated living at its finest with TP2 Furniture Shop. Our curated collection combines timeless elegance with modern flair, offering furnishings that redefine style and comfort.',
      image: 'https://i.pinimg.com/736x/81/f3/8e/81f38e1613b7bab5423a201546d22439.jpg',
      alt: 'Modern living room setup'
    },
    {
      title: 'Premium Comfort',
      subtitle: 'Experience Luxury',
      description: 'Indulge in the perfect blend of comfort and style with our premium furniture collection. Each piece is carefully selected to bring both functionality and elegance to your living space.',
      image: 'https://i.pinimg.com/736x/c8/b8/6c/c8b86ca465546623dbdab4283cf22819.jpg',
      alt: 'Luxury furniture showcase'
    },
        {
      title: 'Discover Inspired Living',
      subtitle: 'Explore Elevated Living',
      description: 'Discover elevated living at its finest with TP2 Furniture Shop. Our curated collection combines timeless elegance with modern flair, offering furnishings that redefine style and comfort.',
      image: 'https://i.pinimg.com/474x/ed/7f/e8/ed7fe8a52ddc2393668de7993cb1a690.jpg',
      alt: 'Modern living room setup'
    },
    {
      title: 'Premium Comfort',
      subtitle: 'Experience Luxury',
      description: 'Indulge in the perfect blend of comfort and style with our premium furniture collection. Each piece is carefully selected to bring both functionality and elegance to your living space.',
      image: 'https://i.pinimg.com/474x/4c/7d/03/4c7d03d1de08d5929a903666923e3eab.jpg',
      alt: 'Luxury furniture showcase'
    }
  ];


  // @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  // ngAfterViewInit() {
  //   if (this.videoPlayer) {
  //     this.enforceMute();
  //   }
  // }

  // enforceMute() {
  //   const video = this.videoPlayer.nativeElement;
  //   video.muted = true;
  //   video.volume = 0;

  //   // Prevents unmuting
  //   video.addEventListener('volumechange', () => {
  //     if (!video.muted) {
  //       video.muted = true;
  //       video.volume = 0;
  //     }
  //   });
  // }

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() artist: string = '';

  platforms = [
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/0GNcLuKnpfCagq8Hya0m6P',
    },
    {
      imageUrl:
        'https://i.pinimg.com/474x/df/74/c3/df74c38d4de71310a2a72ac5a420cb4a.jpg',
      name: 'Apple',
      url: 'https://music.apple.com/za/artist/gee-prime/1489841098',
    },
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=K3qK0fAazWg',
    }
  
  ];

  events: Event[] = [
    {
      day: '20',
      date: 'Mar 2025',
      venue: 'District Nightclub',
      location: 'Johannesburg, Rosebank',
      type: 'club',
      image:
        'https://i.pinimg.com/736x/21/e4/c5/21e4c51155be921de69e4c5bf5923474.jpg',
      priceRange: 'From R150',
    },
    {
      day: '27',
      date: 'Mar 2025',
      venue: 'LIV Nightclub',
      location: 'Pretoria, Arcadia',
      type: 'club',
      image:
        'https://i.pinimg.com/736x/4c/20/02/4c20021bf0f2fe2abb3334efadb6090b.jpg',
      soldOut: true,
    },
    {
      day: '28',
      date: 'Mar 2054',
      venue: 'Big Night Live',
      location: 'Sandton, Sandown',
      type: 'concert',
      image:
        'https://i.pinimg.com/736x/ab/78/26/ab782659bc06ae9eb4f14a95164e62a8.jpg',
      priceRange: 'From R150',
    },
  ];

  cards = [
    {
      imgSrc:
        'https://i.pinimg.com/736x/28/b2/2d/28b22d55f559db540b64abf57afd7aa2.jpg',
      // imgWidth: ,
      imgHeight: 350,
      links: [
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Apple Music',
          iconPath:
            'M16.365 1.43c-.883.52-1.69 1.333-2.16 2.21-.51.943-.805 2.005-.715 3.095 1.149.05 2.27-.43 3.155-1.03.839-.57 1.568-1.325 2.065-2.215.526-.916.825-1.917.75-2.94-.992.05-2.02.506-2.905 1.03zM21.425 19.11c-.82 1.2-1.67 2.37-2.885 2.39-1.28.02-1.69-.77-3.14-.77-1.45 0-1.91.75-3.12.79-1.25.05-2.22-1.29-3.06-2.48-1.67-2.36-2.94-6.68-1.23-9.59.85-1.45 2.37-2.38 4.01-2.4 1.18-.02 2.31.81 3.13.81.76 0 2.14-.98 3.61-.84.61.02 2.33.25 3.44 1.91-.09.06-2.05 1.2-2.03 3.6.02 2.87 2.48 3.83 2.51 3.85-.06.18-.39 1.35-1.13 2.61z',
        },
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Spotify',
          iconPath:
            'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.487 17.302c-.218.351-.693.463-1.043.246-2.857-1.75-6.454-2.145-10.69-1.171-.404.091-.785-.167-.876-.567-.092-.4.167-.785.566-.876 4.53-1.043 8.494-.591 11.637 1.335.35.218.463.692.246 1.033zm1.498-3.234c-.276.451-.864.59-1.315.314-3.275-1.998-8.267-2.58-12.154-1.41-.51.148-1.037-.142-1.186-.655-.148-.511.142-1.037.654-1.186 4.34-1.258 9.802-.615 13.499 1.604.45.276.589.863.314 1.313zm.111-3.513c-3.77-2.241-9.984-2.448-13.451-1.334-.6.184-1.237-.154-1.421-.755-.185-.601.154-1.237.755-1.422 3.947-1.212 10.648-.962 15.055 1.534.544.324.72 1.03.396 1.574-.323.543-1.03.72-1.574.396z',
        },
        {
          href: 'https://music.youtube.com/',
          label: 'YouTube Music',
          iconPath:
            'M23.498 6.186c-.27-1.018-1.07-1.813-2.087-2.087C19.23 3.5 12 3.5 12 3.5s-7.23 0-9.412.599c-1.018.274-1.818 1.069-2.087 2.087C0 8.368 0 12 0 12s0 3.632.501 5.814c.27 1.018 1.07 1.813 2.087 2.087C4.77 20.5 12 20.5 12 20.5s7.23 0 9.412-.599c1.018-.274 1.818-1.069 2.087-2.087C24 15.632 24 12 24 12s0-3.632-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
      ],
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/81/f3/8e/81f38e1613b7bab5423a201546d22439.jpg',
      imgHeight: 150,
      links: [
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Apple Music',
          iconPath:
            'M16.365 1.43c-.883.52-1.69 1.333-2.16 2.21-.51.943-.805 2.005-.715 3.095 1.149.05 2.27-.43 3.155-1.03.839-.57 1.568-1.325 2.065-2.215.526-.916.825-1.917.75-2.94-.992.05-2.02.506-2.905 1.03zM21.425 19.11c-.82 1.2-1.67 2.37-2.885 2.39-1.28.02-1.69-.77-3.14-.77-1.45 0-1.91.75-3.12.79-1.25.05-2.22-1.29-3.06-2.48-1.67-2.36-2.94-6.68-1.23-9.59.85-1.45 2.37-2.38 4.01-2.4 1.18-.02 2.31.81 3.13.81.76 0 2.14-.98 3.61-.84.61.02 2.33.25 3.44 1.91-.09.06-2.05 1.2-2.03 3.6.02 2.87 2.48 3.83 2.51 3.85-.06.18-.39 1.35-1.13 2.61z',
        },
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Spotify',
          iconPath:
            'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.487 17.302c-.218.351-.693.463-1.043.246-2.857-1.75-6.454-2.145-10.69-1.171-.404.091-.785-.167-.876-.567-.092-.4.167-.785.566-.876 4.53-1.043 8.494-.591 11.637 1.335.35.218.463.692.246 1.033zm1.498-3.234c-.276.451-.864.59-1.315.314-3.275-1.998-8.267-2.58-12.154-1.41-.51.148-1.037-.142-1.186-.655-.148-.511.142-1.037.654-1.186 4.34-1.258 9.802-.615 13.499 1.604.45.276.589.863.314 1.313zm.111-3.513c-3.77-2.241-9.984-2.448-13.451-1.334-.6.184-1.237-.154-1.421-.755-.185-.601.154-1.237.755-1.422 3.947-1.212 10.648-.962 15.055 1.534.544.324.72 1.03.396 1.574-.323.543-1.03.72-1.574.396z',
        },
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'YouTube Music',
          iconPath:
            'M23.498 6.186c-.27-1.018-1.07-1.813-2.087-2.087C19.23 3.5 12 3.5 12 3.5s-7.23 0-9.412.599c-1.018.274-1.818 1.069-2.087 2.087C0 8.368 0 12 0 12s0 3.632.501 5.814c.27 1.018 1.07 1.813 2.087 2.087C4.77 20.5 12 20.5 12 20.5s7.23 0 9.412-.599c1.018-.274 1.818-1.069 2.087-2.087C24 15.632 24 12 24 12s0-3.632-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
      ],
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/7e/fe/3b/7efe3bb969a6a84d93f8363ed5a19ba0.jpg',
        imgHeight: 150,
      links: [
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Apple Music',
          iconPath:
            'M16.365 1.43c-.883.52-1.69 1.333-2.16 2.21-.51.943-.805 2.005-.715 3.095 1.149.05 2.27-.43 3.155-1.03.839-.57 1.568-1.325 2.065-2.215.526-.916.825-1.917.75-2.94-.992.05-2.02.506-2.905 1.03zM21.425 19.11c-.82 1.2-1.67 2.37-2.885 2.39-1.28.02-1.69-.77-3.14-.77-1.45 0-1.91.75-3.12.79-1.25.05-2.22-1.29-3.06-2.48-1.67-2.36-2.94-6.68-1.23-9.59.85-1.45 2.37-2.38 4.01-2.4 1.18-.02 2.31.81 3.13.81.76 0 2.14-.98 3.61-.84.61.02 2.33.25 3.44 1.91-.09.06-2.05 1.2-2.03 3.6.02 2.87 2.48 3.83 2.51 3.85-.06.18-.39 1.35-1.13 2.61z',
        },
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Spotify',
          iconPath:
            'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.487 17.302c-.218.351-.693.463-1.043.246-2.857-1.75-6.454-2.145-10.69-1.171-.404.091-.785-.167-.876-.567-.092-.4.167-.785.566-.876 4.53-1.043 8.494-.591 11.637 1.335.35.218.463.692.246 1.033zm1.498-3.234c-.276.451-.864.59-1.315.314-3.275-1.998-8.267-2.58-12.154-1.41-.51.148-1.037-.142-1.186-.655-.148-.511.142-1.037.654-1.186 4.34-1.258 9.802-.615 13.499 1.604.45.276.589.863.314 1.313zm.111-3.513c-3.77-2.241-9.984-2.448-13.451-1.334-.6.184-1.237-.154-1.421-.755-.185-.601.154-1.237.755-1.422 3.947-1.212 10.648-.962 15.055 1.534.544.324.72 1.03.396 1.574-.323.543-1.03.72-1.574.396z',
        },
        {
          href: 'v',
          label: 'https://ditto.fm/timeless-confessions',
          iconPath:
            'M23.498 6.186c-.27-1.018-1.07-1.813-2.087-2.087C19.23 3.5 12 3.5 12 3.5s-7.23 0-9.412.599c-1.018.274-1.818 1.069-2.087 2.087C0 8.368 0 12 0 12s0 3.632.501 5.814c.27 1.018 1.07 1.813 2.087 2.087C4.77 20.5 12 20.5 12 20.5s7.23 0 9.412-.599c1.018-.274 1.818-1.069 2.087-2.087C24 15.632 24 12 24 12s0-3.632-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
      ],
    },

    {
      imgSrc:
        'https://i.pinimg.com/474x/43/80/bd/4380bd8b2ab1c5824b3956bc5851b1fd.jpg',
      imgHeight: 150,
      links: [
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Apple Music',
          iconPath:
            'M16.365 1.43c-.883.52-1.69 1.333-2.16 2.21-.51.943-.805 2.005-.715 3.095 1.149.05 2.27-.43 3.155-1.03.839-.57 1.568-1.325 2.065-2.215.526-.916.825-1.917.75-2.94-.992.05-2.02.506-2.905 1.03zM21.425 19.11c-.82 1.2-1.67 2.37-2.885 2.39-1.28.02-1.69-.77-3.14-.77-1.45 0-1.91.75-3.12.79-1.25.05-2.22-1.29-3.06-2.48-1.67-2.36-2.94-6.68-1.23-9.59.85-1.45 2.37-2.38 4.01-2.4 1.18-.02 2.31.81 3.13.81.76 0 2.14-.98 3.61-.84.61.02 2.33.25 3.44 1.91-.09.06-2.05 1.2-2.03 3.6.02 2.87 2.48 3.83 2.51 3.85-.06.18-.39 1.35-1.13 2.61z',
        },
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'Spotify',
          iconPath:
            'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.487 17.302c-.218.351-.693.463-1.043.246-2.857-1.75-6.454-2.145-10.69-1.171-.404.091-.785-.167-.876-.567-.092-.4.167-.785.566-.876 4.53-1.043 8.494-.591 11.637 1.335.35.218.463.692.246 1.033zm1.498-3.234c-.276.451-.864.59-1.315.314-3.275-1.998-8.267-2.58-12.154-1.41-.51.148-1.037-.142-1.186-.655-.148-.511.142-1.037.654-1.186 4.34-1.258 9.802-.615 13.499 1.604.45.276.589.863.314 1.313zm.111-3.513c-3.77-2.241-9.984-2.448-13.451-1.334-.6.184-1.237-.154-1.421-.755-.185-.601.154-1.237.755-1.422 3.947-1.212 10.648-.962 15.055 1.534.544.324.72 1.03.396 1.574-.323.543-1.03.72-1.574.396z',
        },
        {
          href: 'https://ditto.fm/timeless-confessions',
          label: 'YouTube Music',
          iconPath:
            'M23.498 6.186c-.27-1.018-1.07-1.813-2.087-2.087C19.23 3.5 12 3.5 12 3.5s-7.23 0-9.412.599c-1.018.274-1.818 1.069-2.087 2.087C0 8.368 0 12 0 12s0 3.632.501 5.814c.27 1.018 1.07 1.813 2.087 2.087C4.77 20.5 12 20.5 12 20.5s7.23 0 9.412-.599c1.018-.274 1.818-1.069 2.087-2.087C24 15.632 24 12 24 12s0-3.632-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
      ],
    },
  ];

  card = {
    links: [
      {
        label: 'Generic Icon',
        href: 'https://ditto.fm/timeless-confessions',
        iconPath:
          'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.487 17.302c-.218.351-.693.463-1.043.246-2.857-1.75-6.454-2.145-10.69-1.171-.404.091-.785-.167-.876-.567-.092-.4.167-.785.566-.876 4.53-1.043 8.494-.591 11.637 1.335.35.218.463.692.246 1.033zm1.498-3.234c-.276.451-.864.59-1.315.314-3.275-1.998-8.267-2.58-12.154-1.41-.51.148-1.037-.142-1.186-.655-.148-.511.142-1.037.654-1.186 4.34-1.258 9.802-.615 13.499 1.604.45.276.589.863.314 1.313zm.111-3.513c-3.77-2.241-9.984-2.448-13.451-1.334-.6.184-1.237-.154-1.421-.755-.185-.601.154-1.237.755-1.422 3.947-1.212 10.648-.962 15.055 1.534.544.324.72 1.03.396 1.574-.323.543-1.03.72-1.574.396z',
      },
      {
        label: 'Apple Music',
        href: 'https://ditto.fm/timeless-confessions',
        iconPath:
          'M16.365 1.43c-.883.52-1.69 1.333-2.16 2.21-.51.943-.805 2.005-.715 3.095 1.149.05 2.27-.43 3.155-1.03.839-.57 1.568-1.325 2.065-2.215.526-.916.825-1.917.75-2.94-.992.05-2.02.506-2.905 1.03zM21.425 19.11c-.82 1.2-1.67 2.37-2.885 2.39-1.28.02-1.69-.77-3.14-.77-1.45 0-1.91.75-3.12.79-1.25.05-2.22-1.29-3.06-2.48-1.67-2.36-2.94-6.68-1.23-9.59.85-1.45 2.37-2.38 4.01-2.4 1.18-.02 2.31.81 3.13.81.76 0 2.14-.98 3.61-.84.61.02 2.33.25 3.44 1.91-.09.06-2.05 1.2-2.03 3.6.02 2.87 2.48 3.83 2.51 3.85-.06.18-.39 1.35-1.13 2.61z',
      },
      {
        label: 'YouTube Music',
        href: 'https://ditto.fm/timeless-confessions',
        iconPath:
          'M23.498 6.186c-.27-1.018-1.07-1.813-2.087-2.087C19.23 3.5 12 3.5 12 3.5s-7.23 0-9.412.599c-1.018.274-1.818 1.069-2.087 2.087C0 8.368 0 12 0 12s0 3.632.501 5.814c.27 1.018 1.07 1.813 2.087 2.087C4.77 20.5 12 20.5 12 20.5s7.23 0 9.412-.599c1.018-.274 1.818-1.069 2.087-2.087C24 15.632 24 12 24 12s0-3.632-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      },
    ],
  };

  images = [
    {
      src: 'https://i.pinimg.com/474x/c8/b8/6c/c8b86ca465546623dbdab4283cf22819.jpg',
      alt: 'office content 1',
      height: '250px',
      marginTop: '0px',
      aos: 'fade-right',
      aosOffset: '300',
      aosEasing: 'ease-in-sine'
    },
    {
      src: 'https://i.pinimg.com/474x/ed/7f/e8/ed7fe8a52ddc2393668de7993cb1a690.jpg',
      alt: 'office content 2',
      height: '250px',
      marginTop: '30px',
      aos: 'fade-left',
      aosOffset: '300',
      aosEasing: 'ease-in-sine'
    },
  ];
  videos = [
    {
      title: 'Video 1',
      src: 'https://www.youtube.com/embed/VIDEO_ID_1',
    },
    {
      title: 'Video 2',
      src: 'https://www.youtube.com/embed/VIDEO_ID_2',
    },
    // Add more videos as needed
  ];
  

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.carouselSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getPartialStar(rating: number): number {
    return rating % 1;
  }
  currentVideo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Initialize the first video with autoplay
    this.currentVideo = this.getSanitizedUrl(this.videos[0].src + '?autoplay=1');
  }

  // Sanitize the video URL to avoid security issues
  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Change the currently playing video without refreshing the iframe
  changeVideo(index: number) {
    this.currentVideo = this.getSanitizedUrl(this.videos[index].src + '?autoplay=1');
  }
}
