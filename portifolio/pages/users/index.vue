<template>
  <div class="users-container">
    <div>
      <User v-bind:user="user"/>
    </div>
  </div>
</template>

<script>

var usuarios = [
  {
    results: [
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Mellanie',
          last: 'Van Nuil',
        },
        location: {
          street: {
            number: 143,
            name: 'Hoveniersberg',
          },
          city: "'t Haantje",
          state: 'Flevoland',
          country: 'Netherlands',
          postcode: 93768,
          coordinates: {
            latitude: '42.2078',
            longitude: '89.7876',
          },
          timezone: {
            offset: '-1:00',
            description: 'Azores, Cape Verde Islands',
          },
        },
        email: 'mellanie.vannuil@example.com',
        login: {
          uuid: 'ad360c01-e236-4ad9-a621-86ed2c8d9c59',
          username: 'bigleopard473',
          password: 'bite',
          salt: 'lnzNYMky',
          md5: '7fe4d2d98eaf43d936d7e02f1cde8c5a',
          sha1: '8c30f9dff8f6c1b48f1469e66f4d97657f5044e7',
          sha256:
            'ae2be75048a0f76e06089c46fe1089cdc4508af5816b816bdfaee5bd68c80588',
        },
        dob: {
          date: '1995-05-06T20:17:53.701Z',
          age: 25,
        },
        registered: {
          date: '2017-03-24T14:56:37.209Z',
          age: 3,
        },
        phone: '(758)-573-5361',
        cell: '(790)-196-7384',
        id: {
          name: 'BSN',
          value: '28152491',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/12.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/12.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/12.jpg',
        },
        nat: 'NL',
      },
    ],
    info: {
      seed: '25b2af1d341afe15',
      results: 1,
      page: 1,
      version: '1.3',
    },
  },
  {
    results: [
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Nicoline',
          last: 'Hansen',
        },
        location: {
          street: {
            number: 4389,
            name: 'Rådyrvej',
          },
          city: 'Randers Nv',
          state: 'Syddanmark',
          country: 'Denmark',
          postcode: 69698,
          coordinates: {
            latitude: '-36.4704',
            longitude: '136.0476',
          },
          timezone: {
            offset: '+9:30',
            description: 'Adelaide, Darwin',
          },
        },
        email: 'nicoline.hansen@example.com',
        login: {
          uuid: 'b25e7a9f-a20f-4b06-a82c-61c73f50ae93',
          username: 'smallgorilla165',
          password: 'biggun',
          salt: 'la8RcAPI',
          md5: 'c16a38439fce5fb62e16124ca16f17a1',
          sha1: '73e0ddff0cc6a1f7da39717d3d8de6f5f3c38a25',
          sha256:
            'b8ddf8c688c6a44f167a354b315b73a6aad16590da102d63b0b81dbdfaa8878d',
        },
        dob: {
          date: '1987-03-14T08:35:22.917Z',
          age: 33,
        },
        registered: {
          date: '2010-02-14T13:12:20.795Z',
          age: 10,
        },
        phone: '93068613',
        cell: '57906088',
        id: {
          name: 'CPR',
          value: '140387-1884',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/21.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
        },
        nat: 'DK',
      },
    ],
    info: {
      seed: '0fdc08053e0da8df',
      results: 1,
      page: 1,
      version: '1.3',
    },
  },
  {
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Reginald',
          last: 'Sullivan',
        },
        location: {
          street: {
            number: 2852,
            name: 'Patrick Street',
          },
          city: 'Tramore',
          state: 'Westmeath',
          country: 'Ireland',
          postcode: 75517,
          coordinates: {
            latitude: '15.9131',
            longitude: '-67.6035',
          },
          timezone: {
            offset: '0:00',
            description: 'Western Europe Time, London, Lisbon, Casablanca',
          },
        },
        email: 'reginald.sullivan@example.com',
        login: {
          uuid: 'ce74aeeb-0f07-4403-984a-c137d65c7237',
          username: 'crazyostrich791',
          password: 'kittie',
          salt: 'c0bCpbnK',
          md5: '53d6e5577dfc3b0b8ea8e96642a041b5',
          sha1: 'f3b316592484cdc7966444fa603ee8d50df9f8b4',
          sha256:
            '5e110e9599f30a439f384c36111adafbf870033ad539498d3850c64fd22da22b',
        },
        dob: {
          date: '1948-01-31T23:28:32.297Z',
          age: 72,
        },
        registered: {
          date: '2005-08-12T23:41:48.884Z',
          age: 15,
        },
        phone: '061-437-4124',
        cell: '081-149-1887',
        id: {
          name: 'PPS',
          value: '1167457T',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/46.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/46.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
        },
        nat: 'IE',
      },
    ],
    info: {
      seed: '064128c19848d777',
      results: 1,
      page: 1,
      version: '1.3',
    },
  },
  {
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Emil',
          last: 'Steine',
        },
        location: {
          street: {
            number: 3192,
            name: 'Hestehagen',
          },
          city: 'Sandeid',
          state: 'Hordaland',
          country: 'Norway',
          postcode: '5119',
          coordinates: {
            latitude: '55.0290',
            longitude: '-165.4546',
          },
          timezone: {
            offset: '+5:45',
            description: 'Kathmandu',
          },
        },
        email: 'emil.steine@example.com',
        login: {
          uuid: '4cc55a69-bf65-4b19-a747-9fa56acc0dbb',
          username: 'crazyladybug656',
          password: 'hugo',
          salt: 'U8zuRgJN',
          md5: 'b2c793a20dccfd7593bc1519ebd41d70',
          sha1: '2c7ffe7de8e4742e6b0c4975098da3df9062a185',
          sha256:
            'd033f9698a028b13600cba77be846c320c6b97c04be9444af741d584920c5e76',
        },
        dob: {
          date: '1996-03-07T12:00:47.151Z',
          age: 24,
        },
        registered: {
          date: '2013-06-27T03:38:23.659Z',
          age: 7,
        },
        phone: '56770867',
        cell: '49537756',
        id: {
          name: 'FN',
          value: '07039638791',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/36.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/36.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/36.jpg',
        },
        nat: 'NO',
      },
    ],
    info: {
      seed: '715b8e1c17c9d984',
      results: 1,
      page: 1,
      version: '1.3',
    },
  },
]
export default {
  data(){
    return {
      user: usuarios[0].results[0]
    }
  }
}
</script>

<style>
.users-container {
  margin: 0 auto;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.users-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
