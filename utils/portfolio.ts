import { Artwork } from "interfaces";

export const portfolios: Artwork[] = [
  {title: 'BFD', type: 'UI/UX',specialty:'전공', description: 'IT경영과 대표창업동아리'},
  {title: 'FRS', type: 'UI/UX',specialty:'전공', description: '동아리'},
  {title: 'HMH', type: 'UI/UX',specialty:'전공', description: '동아리'},
  {title: 'ERP', type: 'UI/UX', description: '동아리'},
  {title: 'KIWINOMICS', type: '그래픽', description: '경제경영연구동아리'},
  {title: 'TAXI', type: '영상', description: '세무회계동아리',},
]

export const getHref = (title: string, index: Number) => {
  return `artwork/${index}${title}`
}