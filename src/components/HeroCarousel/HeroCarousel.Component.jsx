import React, { useState } from 'react'

// Hero Carousel Slider from react slick 
import HeroSlider from "react-slick"

const HeroCarousel = () => {
  
    const [images, setimages] = useState ([
        [
            {
              "adult": false,
              "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
              "genre_ids": [
                16,
                12,
                10751,
                14,
                35
              ],
              "id": 502356,
              "original_language": "en",
              "original_title": "The Super Mario Bros. Movie",
              "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
              "popularity": 10268.552,
              "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
              "release_date": "2023-04-05",
              "title": "The Super Mario Bros. Movie",
              "video": false,
              "vote_average": 7.5,
              "vote_count": 486
            },
            {
              "adult": false,
              "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
              "genre_ids": [
                18,
                28
              ],
              "id": 677179,
              "original_language": "en",
              "original_title": "Creed III",
              "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.",
              "popularity": 7413.386,
              "poster_path": "/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg",
              "release_date": "2023-03-01",
              "title": "Creed III",
              "video": false,
              "vote_average": 7.3,
              "vote_count": 870
            },
            {
              "adult": false,
              "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
              "genre_ids": [
                878,
                12,
                28
              ],
              "id": 76600,
              "original_language": "en",
              "original_title": "Avatar: The Way of Water",
              "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
              "popularity": 6686.292,
              "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
              "release_date": "2022-12-14",
              "title": "Avatar: The Way of Water",
              "video": false,
              "vote_average": 7.7,
              "vote_count": 6873
            },
            {
              "adult": false,
              "backdrop_path": "/vSUls0b7dNhC7tJoExF1MBYWWyh.jpg",
              "genre_ids": [
                16,
                35,
                10751,
                12,
                14
              ],
              "id": 816904,
              "original_language": "es",
              "original_title": "Momias",
              "overview": "Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
              "popularity": 2873.899,
              "poster_path": "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
              "release_date": "2023-01-05",
              "title": "Mummies",
              "video": false,
              "vote_average": 7.1,
              "vote_count": 133
            },
            {
              "adult": false,
              "backdrop_path": "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
              "genre_ids": [
                35,
                9648,
                28
              ],
              "id": 638974,
              "original_language": "en",
              "original_title": "Murder Mystery 2",
              "overview": "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
              "popularity": 4873.95,
              "poster_path": "/swzMoIVn6xjB857ziYJ8KBV440g.jpg",
              "release_date": "2023-03-28",
              "title": "Murder Mystery 2",
              "video": false,
              "vote_average": 6.4,
              "vote_count": 564
            },
            {
              "adult": false,
              "backdrop_path": "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
              "genre_ids": [
                16,
                10751,
                14,
                12,
                35
              ],
              "id": 315162,
              "original_language": "en",
              "original_title": "Puss in Boots: The Last Wish",
              "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
              "popularity": 2183.904,
              "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
              "release_date": "2022-12-07",
              "title": "Puss in Boots: The Last Wish",
              "video": false,
              "vote_average": 8.3,
              "vote_count": 5117
            },
            {
              "adult": false,
              "backdrop_path": "/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg",
              "genre_ids": [
                28
              ],
              "id": 842945,
              "original_language": "en",
              "original_title": "Supercell",
              "overview": "Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
              "popularity": 2042.687,
              "poster_path": "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg",
              "release_date": "2023-03-17",
              "title": "Supercell",
              "video": false,
              "vote_average": 6.1,
              "vote_count": 73
            },
            {
              "adult": false,
              "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
              "genre_ids": [
                53,
                35,
                80
              ],
              "id": 804150,
              "original_language": "en",
              "original_title": "Cocaine Bear",
              "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
              "popularity": 2037.086,
              "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
              "release_date": "2023-02-22",
              "title": "Cocaine Bear",
              "video": false,
              "vote_average": 6.5,
              "vote_count": 708
            },
            {
              "adult": false,
              "backdrop_path": "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
              "genre_ids": [
                28,
                53,
                80
              ],
              "id": 603692,
              "original_language": "en",
              "original_title": "John Wick: Chapter 4",
              "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
              "popularity": 2288.367,
              "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
              "release_date": "2023-03-22",
              "title": "John Wick: Chapter 4",
              "video": false,
              "vote_average": 8,
              "vote_count": 919
            },
            {
              "adult": false,
              "backdrop_path": "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",
              "genre_ids": [
                28,
                35,
                14
              ],
              "id": 594767,
              "original_language": "en",
              "original_title": "Shazam! Fury of the Gods",
              "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
              "popularity": 2973.159,
              "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
              "release_date": "2023-03-15",
              "title": "Shazam! Fury of the Gods",
              "video": false,
              "vote_average": 7,
              "vote_count": 634
            },
            {
              "adult": false,
              "backdrop_path": "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
              "genre_ids": [
                27,
                9648
              ],
              "id": 758323,
              "original_language": "en",
              "original_title": "The Pope's Exorcist",
              "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
              "popularity": 2284.645,
              "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
              "release_date": "2023-04-05",
              "title": "The Pope's Exorcist",
              "video": false,
              "vote_average": 7.4,
              "vote_count": 28
            },
            {
              "adult": false,
              "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
              "genre_ids": [
                27,
                53
              ],
              "id": 980078,
              "original_language": "en",
              "original_title": "Winnie the Pooh: Blood and Honey",
              "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
              "popularity": 1560.371,
              "poster_path": "/fNTtVbqI92abEKAgz2ynurCUne.jpg",
              "release_date": "2023-01-27",
              "title": "Winnie the Pooh: Blood and Honey",
              "video": false,
              "vote_average": 5.8,
              "vote_count": 403
            },
            {
              "adult": false,
              "backdrop_path": "/u5nY7pY2Y58o7dSM9cy6NclOV8V.jpg",
              "genre_ids": [
                27
              ],
              "id": 1023313,
              "original_language": "es",
              "original_title": "La Exorcista",
              "overview": "Ophelia, a young nun recently arriving in the town of San Ramon, is forced to perform an exorcism on a pregnant woman in danger of dying. Just when she thinks her possession has ended, she discovers that the evil presence hasn't disappeared yet. The director of the award-winning Here Comes the Devil and Late Phases adds a new twist to possession movies in one of this year's Latin American horror surprises.",
              "popularity": 1608.581,
              "poster_path": "/d07xtqwq1uriQ1hda6qeu8Skt5m.jpg",
              "release_date": "2022-11-02",
              "title": "The Exorcist",
              "video": false,
              "vote_average": 5.5,
              "vote_count": 57
            },
            {
              "adult": false,
              "backdrop_path": "/sgFDQwJTYMuUS7Ng4PAPB8nBf2j.jpg",
              "genre_ids": [
                28,
                18,
                27,
                878,
                53
              ],
              "id": 1084225,
              "original_language": "en",
              "original_title": "The Park",
              "overview": "A dystopian coming-of-age movie focused on three kids who find themselves in an abandoned amusement park, aiming to unite whoever remains. With dangers lurking around every corner, they will do whatever it takes to survive their hellish Neverland.",
              "popularity": 1530.082,
              "poster_path": "/hR1jdCw0A9czgsbp45TASkjjBhA.jpg",
              "release_date": "2023-03-02",
              "title": "The Park",
              "video": false,
              "vote_average": 5.7,
              "vote_count": 25
            },
            {
              "adult": false,
              "backdrop_path": null,
              "genre_ids": [
                53
              ],
              "id": 1076605,
              "original_language": "es",
              "original_title": "Cazadora",
              "overview": "In a dystopian future, a mother and her teenage son go hunting in the mountains and encounter a stranger who threatens to upend their relationship.",
              "popularity": 1370.658,
              "poster_path": "/8QxCd3pSSrj6QqaG4fkNkaJmUa.jpg",
              "release_date": "2023-01-19",
              "title": "Cazadora",
              "video": false,
              "vote_average": 5.9,
              "vote_count": 14
            },
            {
              "adult": false,
              "backdrop_path": "/eNJhWy7xFzR74SYaSJHqJZuroDm.jpg",
              "genre_ids": [
                28,
                878
              ],
              "id": 1033219,
              "original_language": "en",
              "original_title": "Attack on Titan",
              "overview": "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
              "popularity": 1692.436,
              "poster_path": "/ay8SLFTMKzQ0i5ewOaGHz2bVuZL.jpg",
              "release_date": "2022-09-30",
              "title": "Attack on Titan",
              "video": false,
              "vote_average": 6.1,
              "vote_count": 46
            },
            {
              "adult": false,
              "backdrop_path": "/4840rkbpsiuow5ew155oVKcqJwj.jpg",
              "genre_ids": [
                18
              ],
              "id": 615,
              "original_language": "en",
              "original_title": "The Passion of the Christ",
              "overview": "A graphic portrayal of the last twelve hours of Jesus of Nazareth's life.",
              "popularity": 1016.686,
              "poster_path": "/2C9vyK6leWDb2ds65R7uIwSmh8V.jpg",
              "release_date": "2004-02-25",
              "title": "The Passion of the Christ",
              "video": false,
              "vote_average": 7.5,
              "vote_count": 3830
            },
            {
              "adult": false,
              "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
              "genre_ids": [
                28,
                12,
                878
              ],
              "id": 505642,
              "original_language": "en",
              "original_title": "Black Panther: Wakanda Forever",
              "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
              "popularity": 1246.715,
              "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
              "release_date": "2022-11-09",
              "title": "Black Panther: Wakanda Forever",
              "video": false,
              "vote_average": 7.3,
              "vote_count": 4471
            },
            {
              "adult": false,
              "backdrop_path": "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
              "genre_ids": [
                18,
                36
              ],
              "id": 943822,
              "original_language": "en",
              "original_title": "Prizefighter: The Life of Jem Belcher",
              "overview": "At the turn of the 19th century, Pugilism was the sport of kings and a gifted young boxer fought his way to becoming champion of England.",
              "popularity": 1127.301,
              "poster_path": "/x3PIk93PTbxT88ohfeb26L1VpZw.jpg",
              "release_date": "2022-06-30",
              "title": "Prizefighter: The Life of Jem Belcher",
              "video": false,
              "vote_average": 6.2,
              "vote_count": 112
            },
            {
              "adult": false,
              "backdrop_path": "/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg",
              "genre_ids": [
                27,
                53
              ],
              "id": 296271,
              "original_language": "en",
              "original_title": "The Devil Conspiracy",
              "overview": "The hottest biotech company in the world has discovered they can clone history’s most influential people from the dead. Now, they are auctioning clones of Michelangelo, Galileo, Vivaldi, and others for tens of millions of dollars to the world’s ultra-rich. But when they steal the Shroud of Turin and clone the DNA of Jesus Christ, all hell breaks loose.",
              "popularity": 1074.142,
              "poster_path": "/2lUYbD2C3XSuwqMUbDVDQuz9mqz.jpg",
              "release_date": "2023-01-13",
              "title": "The Devil Conspiracy",
              "video": false,
              "vote_average": 6.5,
              "vote_count": 104
            }
          ]
    ]);
  
    return (
        <>
            <div className='lg:hidden'> 

            </div>
            
            <div className='hidden lg:block'>

            </div>
        </>
    )

    // lg:hidden    means for large screens hidden.
    // hidden lg:block    it means for smaller and medium screens it will be hidden but for large screens it will be display of block
}

export default HeroCarousel