<template>
  <div class="users-container">
    <div>
      <User v-bind:user="user" />
    </div>
  </div>
</template>

<script>

var usuarios = [
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
      postcode: 93768
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
    nat: 'NL'
  },
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
    },
    email: 'nicoline.hansen@example.com',
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
    nat: 'DK'
  },
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
      postcode: 75517
    },
    email: 'reginald.sullivan@example.com',
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
    nat: 'IE'
  },
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
      postcode: '5119'
    },
    email: 'emil.steine@example.com',
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
    nat: 'NO'
  }
]
export default {
  data(){
    return {
      user: usuarios[3]
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
