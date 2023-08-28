import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  thresholds: {
    http_req_duration: ['p(99) < 3000']
  },
  duration: '10s',
  vus: 2 // change it to 1 and you will see correct titles in all responses
}

// Simulated user behavior
export default function () {
  const res = http.get('http://localhost:3000/test')
  check(res, { 'status was 200': r => r.status === 200 })
  console.log(res.body.match('<title>(.*?)</title>')[1])
  sleep(1)
}
