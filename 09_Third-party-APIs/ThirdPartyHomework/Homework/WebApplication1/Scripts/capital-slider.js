var SliderControl = (function () {
    var map;


    var Slider = {
        init: function (number, slides) {
            this.slides = slides || [];
            this.number = number;
            return this;
        },
        attachHandlers:function(){
            var self=this;
            $("#next").on("click", function () {
               self.number++;
                if (self.number>=self.slides.length) {
                    self.number = 0;
                }
                self.renderSlide();

            });
            $("#prev").on("click", function () {
                self.number--;
                if (self.number < 0) {
                    self.number = self.slides.length-1;
                }
                self.renderSlide();

            });
            $("#capitals").on("click", "li", function () {
                self.number = this.id;
                self.renderSlide();

            });
        },

        addSlide: function (slide) {
            if (!this.slides) {
                this.slides = [];
            }
            this.slides.push(slide);
            console.log("enter addSlide)");
            return this;
        },

        renderSlide: function () {
            var slide = this.slides[this.number];
            var x = parseFloat(slide.x);
            var y = parseFloat(slide.y);
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(x, y),
                mapTypeId: google.maps.MapTypeId.ROADMAP

            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

            document.getElementById("header").innerHTML=slide.title;
            document.getElementById("info").innerHTML=slide.info;
        },
    }

    var Slide = {

        init: function (title, x, y, info) {
            console.log("enter slide init");
            this.x = x;
            this.y = x;
            this.title = title;
            this.info = info;
            return this;
        }
    }

    return {

        Slider: Slider,
        Slide: Slide
    }

}());

function initializeMap() {
    var slider = Object.create(SliderControl.Slider);
    console.log("slider created");
    slider.init(0);
    slider.attachHandlers();
    var slide1 = Object.create(SliderControl.Slide);
    slide1.init("Beijing", "39.916667", "116.383333", "Beijing (/beɪˈdʒɪŋ/; Chinese: 北京; pinyin: Běijīng, [peɪ˨˩ t͡ɕiŋ˥] ( listen)), sometimes romanized as Peking[4] (/piːˈkɪŋ/, /peɪˈkɪŋ/), is the capital of the People's Republic of China and one of the most populous cities in the world. The population as of 2012 was 20,693,000.[2] The metropolis, located in northern China, is governed as a direct-controlled municipality under the national government, with 14 urban and suburban districts and two rural counties.[5] Beijing Municipality is surrounded by Hebei Province with the exception of neighboring Tianjin Municipality to the southeast.");
    slider.addSlide(slide1);
    var slide2 = Object.create(SliderControl.Slide);
    slide2.init("New Delhi", "28.613333", "77.208333", "New Delhi Listeni/ˈnjuː dɛli/ is the capital of the Republic of India, and the seat of executive, legislative, and judiciary branches of the Government of India. It also serves as the centre of the Government of the National Capital Territory of Delhi. New Delhi is situated within the metropolis of Delhi and is one of the eleven districts of Delhi National Capital Territory.");
    slider.addSlide(slide2);
    var slide3 = Object.create(SliderControl.Slide);
    slide3.init("Bangkokg", "13.75", "100.483333", "Bangkok is the capital and the most populous city of Thailand. It is known in Thai as Krung Thep Maha Nakhon (กรุงเทพมหานคร, pronounced [krūŋ tʰêːp mahǎː nákʰɔ̄ːn] ( listen)) or simply About this sound Krung Thep (help·info). The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in Central Thailand, and has a population of over eight million, or 12.6 percent of the country's population. Over fourteen million people (22.2 percent) live within the surrounding Bangkok Metropolitan Region, making Bangkok an extreme primate city, dwarfing Thailand's other urban centres in terms of importance.");
    slider.addSlide(slide3);
    var slide4 = Object.create(SliderControl.Slide);
    slide4.init("Hanoi", "21.20", "105.51", "Hanoi (About this sound listen) is the capital of Vietnam and the country's second largest city. Its population in 2009 was estimated at 2.6 million for urban districts,[1] 6.5 million for the metropolitan jurisdiction.[2] From 1010 until 1802, it was the most important political centre of Vietnam. It was eclipsed by Huế, the imperial capital of Vietnam during the Nguyen dynasty (1802-1945), but Hanoi served as the capital of French Indochina from 1902 to 1954. From 1954 to 1976, it was the capital of North Việt Nam, and it became the capital of a reunified Vietnam in 1976, after the North's victory in the Vietnam war." +
    "The city is located on the right bank of the Red River. Hanoi is located at 1,760 km (1,090 mi) north of Ho Chi Minh City and at 120 km (75 mi) west of Hai Phong city.");
    slider.addSlide(slide4);
    var slide5 = Object.create(SliderControl.Slide);
    slide5.init("Istanbul", "41.013611", "28.955", "Istanbul (Turkish: İstanbul) is the largest city in Turkey, constituting the country's economic, cultural, and historical heart. With a population of 13.9 million, the city forms one of the largest urban agglomerations in Europe[d] and is the second-largest city in the world by population within city limits.[2][3] Istanbul's vast area of 5,343 square kilometers (2,063 sq mi) is coterminous with Istanbul Province, of which the city is the administrative capital.[c] Istanbul is a transcontinental city, straddling the Bosphorus—one of the world's busiest waterways—in northwestern Turkey, between the Sea of Marmara and the Black Sea. Its commercial and historical center lies in Europe, while a third of its population lives in Asia.");
    slider.addSlide(slide5);
    var slide6 = Object.create(SliderControl.Slide);
    slide6.init("'Tokyo", "35.683333", "139.766667", "Tokyo (東京 Tōkyō?, Eastern Capital) (Japanese: [toːkjoː], English /ˈtoʊki.oʊ/), officially Tokyo Metropolis (東京都 Tōkyō-to?),[4] is one of the 47 prefectures of Japan. Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the largest metropolitan area in the world.[5] It is the seat of the Japanese government and the Imperial Palace, and the home of the Japanese Imperial Family. Tokyo is in the Kantō region on the southeastern side of the main island Honshu and includes the Izu Islands and Ogasawara Islands.[6] Tokyo Metropolis was formed in 1943 from the merger of the former Tokyo Prefecture (東京府 Tōkyō-fu?) and the city of Tokyo (東京市 Tōkyō-shi?).");
    slider.addSlide(slide6);
    var slide7 = Object.create(SliderControl.Slide);
    slide7.init("Brasilia", "-15.783333", "-47.866667", "Brasília (Portuguese pronunciation: [bɾaˈziʎɐ]) is the federal capital of Brazil and the seat of government of the Federal District. Administratively, the city is located in the Federal District which is in the Central-West Region. Physically, it is located in the Brazilian Highlands. It has a population of about 2,562,963 (3,716,996 in the metropolitan area) as of the 2008 IBGE estimate, making it the fourth largest city in Brazil. However, as a metropolitan area, it ranks lower at sixth in population. Brasília is the largest city in the world that did not exist at the beginning of the 20th century.");
    slider.addSlide(slide7);
    var slide8= Object.create(SliderControl.Slide);
    slide8.init("Mexico City", "19.05", "-99.366667", "Mexico City (/ˈmɛksɨkoʊ ˈsɪti/; Spanish: Ciudad de México [sjuˈðað ðe ˈmexiko], also known as México, D. F., or simply D.F.) is the Federal District (Distrito Federal), capital of Mexico and seat of the Mexican federal government.[10] It is a federal entity within Mexico which is not part of any one of the 31 Mexican states but belongs to the federation as a whole. Mexico City is the country's largest city as well as its most important political, cultural, educational and financial center.");
    slider.addSlide(slide8);
    var slide9 = Object.create(SliderControl.Slide);
    slide9.init("Santiago", "-33.433333", "-70.666667", "Santiago (Spanish pronunciation: [san̪ˈtja.ɣo]), formally Santiago de Chile[citation needed] [san̪ˈtja.ɣo ðe ˈtʃi.le] ( listen), is the capital of Chile and the center of its largest conurbation. It is located in the country's central valley, at an elevation of 520 m (1,706.04 ft) above mean sea level.");
    slider.addSlide(slide9);
    var slide1 = Object.create(SliderControl.Slide);
    slide1.init("Cairo", "30.033333", "31.216667", "Cairo (/ˈkaɪroʊ/ KYE-roh ; Arabic: القاهرة‎) is the capital of Egypt and the largest city in the Arab world and Africa. Its metropolitan area is the 16th largest in the world. Located near the Nile Delta,[1][2] it was founded in 969 AD. Nicknamed 'the city of a thousand minarets' for its preponderance of Islamic architecture, Cairo has long been a centre of the region's political and cultural life. Cairo was founded by the Fatimid dynasty in the 10th century AD, but the land composing the present-day city was the site of national capitals whose remnants remain visible in parts of Old Cairo. Cairo is also associated with Ancient Egypt as it is close to the ancient cities of Memphis, Giza and Fustat which are near the Great Sphinx and the pyramids of Giza.");
    slider.addSlide(slide1);
    var slide10 = Object.create(SliderControl.Slide);
    slide10.init("Moscow", "55.75", "37.616667", "Moscow (/ˈmɒskaʊ/ or /ˈmɒskoʊ/; Russian: Москва, tr. Moskva; IPA: [mɐˈskva] ( listen)) is the capital city and the most populous federal subject of Russia. The city is a major political, economic, cultural and scientific center in Russia and in Eurasia. According to Forbes 2012, Moscow has the second largest community of billionaires in the world. Moscow is the northernmost megacity on Earth, the most populous city in Europe,[14][15][16] and the 5th largest city proper in the world. It is the largest city in Russia with a population, according to the 2010 Census, of 11,503,501.[8] By its territorial expansion on July 1, 2012 southwest into the Moscow Oblast, the capital increased its area 2.5 times; from about 1,000 square kilometers (390 sq mi) up to 2,511 square kilometers (970 sq mi), and gained additional population of 233,000 people");
    slider.addSlide(slide10);
    slider.renderSlide();
}

google.maps.event.addDomListener(window, 'load', initializeMap());
//google.maps.event.addDomListener(window, 'load', slider.initialize());
