import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query {
    courses {
      id
      title
      duration
      price
      image {
        url
      }
      teacher {
        name
      }
      slug
    }
  }
`;

export const GET_COURSE_DETAILS = gql`
  query getCourseDetails($slug: String!) {
    course(where: { slug: $slug }) {
      id
      title
      duration
      price
      teacher {
        name
        image {
          url
        }
        description
      }
      image {
        url
      }
    }
  }
`;

export const GET_TEACHERS = gql`
  query {
    teachers {
      name
      image {
        url
      }
      stack
    }
  }
`