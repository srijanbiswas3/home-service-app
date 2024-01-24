import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clrh8tkmw157q01w9dq22n9v9/master";

const getSlider = async () => {

  const slider = gql`
    query GetSlider {
        sliders {
        id
        name
        image {
            url
            }
        }
    }
`
  const result = await request(MASTER_URL, slider);
  return result;
}

const getCategory = async () => {
  const category = gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }`

  const result = await request(MASTER_URL, category);
  return result;
}
const getBusinessList = async () => {
  const businessLists = gql`
  query GetBusinessList {
    businessLists {
      email
      name
      id
      images {
        url
      }
      about
      address
      category
      contactPerson
    }
  }
  `

  const result = await request(MASTER_URL, businessLists);
  return result;
}

const getBusinessListByCategory = async (category) => {
  const businessListsByCategory = gql`
  query GetBusinessListByCategory {
    businessLists(where: {category: "${category}"}) {
      email
      name
      id
      images {
        url
      }
      about
      address
      category
      contactPerson
    }
  }
   `


  const result = await request(MASTER_URL, businessListsByCategory);
  return result;
}
const createBooking = async (booking) => {
  const createBooking = gql`
  mutation CreateBooking {
    createBooking(
      data: {
        bookingStatus: Booked,
        userEmail: "${booking.email}",
        userName: "${booking.userName}",
        businessList: {
          connect: {
            id: "${booking.businessId}"
          }
        },
        date: "${booking.date}",
        time: "${booking.time}"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED){
      count
    }
  }
  `

  const result = await request(MASTER_URL, createBooking);
  return result;
}

const getBookings = async (email) => {

  const getBookings = gql`
  query GetBookings {
    bookings(where: {userEmail: "${email}"}) {
      bookingStatus
      date
      id
      time
      businessList {
        address
        about
        category
        contactPerson
        email
        name
        images {
          url
        }
      }
      userName
    }
  }
  `
  const result = await request(MASTER_URL, getBookings)
  return result;
}
export default { getSlider, getCategory, getBusinessList, getBusinessListByCategory, createBooking,getBookings }
