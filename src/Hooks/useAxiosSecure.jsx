import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://redinvoice.com'
})



const useAxiosSecure = () => {
    axiosInstance.interceptors.request.use(
        (config) => {
        //   const token = localStorage.getItem('token');
          const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTEwZjM4MDE0M2U5MjZjYjllY2E0ZGMxZDQ3M2E4NTg4NGJlNTlhYzA3NWU3N2U4OGM2MzIwNDM0ZjY4NjYyOTE2MDk5N2I3OTNiNWRmNWIiLCJpYXQiOjE3MTMxMDg5MzUuNzI2ODEzMDc3OTI2NjM1NzQyMTg3NSwibmJmIjoxNzEzMTA4OTM1LjcyNjgxNDAzMTYwMDk1MjE0ODQzNzUsImV4cCI6MTc0NDY0NDkzNS43MjI2NTc5MTg5MzAwNTM3MTA5Mzc1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.gCCINzyBwU1twBfxWiKhGRuzLzaBymy_ATpL0uHN9X93FicRTCD4CedTqJ6g6r7y_vtiQ6t7vsqzr507phFIQyIL8zAJ8RAiSo71ILJcBfXvBio0Lwf4eGoQ2Igm3Hs1zKiESfiJf6cJAh63_OWsQicnxDBLrhEXHvTyiYaOByWPKmHaERew67E1g75SMAXamwWqIjtAdWj_eT-TW1PwXxKXA9RDngSlnu6wvdE0JcGyxYReatVv4Y4xXkajuRjMmf8Waxkt5wZP71jAa7PChAzSX6bTaZA8M-JOKGd_T_gRGOdpwdlCKO1sFnR7cdKmOJ9fZjT8X8Ues54h76PSMAeGjQ6IZZXn8Wtu25ciWYhDWNBpzKOwV_R_coU25y8eaHdkcknbWOgt985qkKdRutoZb_x3TXIiybmOyzyjf4xl8kZt4zBAHPRQZK74jif4_0rx0EHdtOTG5r84mkQwcM1IDJVegx3Nm2AzbZZI_GajmoiIS_hgFrjf-tRAGXhlXXkc9xAzvsq_fNt5RxQ-QlqYYkxHfRHKRXn74GfKU_LC-q2dHIdneUAzBoqTcJkukyJo9Fy8jSHQrAZ-llWdpVuUm4uEhvtGjmv2bhRtTBRTFe7rLxsLBw_oiIqMz6ErUTvpteeeI04DtoZzbGDhWbLXVtb1FnZPC1zgWm0NIbg'
          if (token) {
            config.headers["Authorization"] = "Bearer " + token;
          }
          return config;
        },
        (error) => {
          Promise.reject(error);
        }
      );
      return axiosInstance;
    }

export default useAxiosSecure;