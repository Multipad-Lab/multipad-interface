import projectThumb1 from "src/assets/images/project/privius-image.png"
import projectThumb2 from "src/assets/images/project/privius-image2.png"
import projectThumb3 from "src/assets/images/project/privius-image3.png"
import projectThumb4 from "src/assets/images/project/privius-image4.png"
import projectThumb5 from "src/assets/images/project/privius-image5.png"

import coinIcon1 from "src/assets/images/project/project-single-image.png"
import coinIcon2 from "src/assets/images/project/project-single-image2.png"
import coinIcon3 from "src/assets/images/project/project-single-image3.png"
import coinIcon4 from "src/assets/images/project/project-single-image4.png"
import coinIcon5 from "src/assets/images/project/project-single-image5.png"
import { ProjectItemType, ProjectStatusType } from "src/types/projectList"

export default {
  data: [
    {
      projectStatus: "open" as ProjectStatusType,
      totalPages: 3,
      projects: [
        {
          id: 1,
          thumb: projectThumb1,
          title: "KyberDyne",
          price: "0.59",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "100,000",
          progress: "100%",
          coinIcon: coinIcon1,
          projectStatus: "open" as ProjectStatusType
        },
        {
          id: 2,
          thumb: projectThumb2,
          title: "Super Sidero",
          price: "0.13",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "483,000",
          progress: "73%",
          coinIcon: coinIcon2,
          projectStatus: "open" as ProjectStatusType
        },
        {
          id: 3,
          thumb: projectThumb3,
          title: "Meta World",
          price: "0.33",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "99,0000",
          progress: "98%",
          coinIcon: coinIcon3,
          projectStatus: "open" as ProjectStatusType
        },
        {
          id: 4,
          thumb: projectThumb4,
          title: "Fisrt Survivor",
          price: "0.89",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "82,6000",
          progress: "100%",
          coinIcon: coinIcon4,
          projectStatus: "open" as ProjectStatusType
        },
        {
          id: 5,
          thumb: projectThumb5,
          title: "Cryowar Two",
          price: "0.45",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "38,8000",
          progress: "86%",
          coinIcon: coinIcon5,
          projectStatus: "open" as ProjectStatusType
        }
      ] as ProjectItemType[]
    },
    {
      projectStatus: "upcomming" as ProjectStatusType,
      totalPages: 2,
      projects: [
        {
          id: 6,
          thumb: projectThumb2,
          title: "Super Sidero",
          price: "0.13",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "483,000",
          progress: "73%",
          coinIcon: coinIcon2,
          projectStatus: "upcomming" as ProjectStatusType
        },
        {
          id: 7,
          thumb: projectThumb3,
          title: "Meta World",
          price: "0.33",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "99,0000",
          progress: "98%",
          coinIcon: coinIcon3,
          projectStatus: "upcomming" as ProjectStatusType
        },
        {
          id: 8,
          thumb: projectThumb4,
          title: "Fisrt Survivor",
          price: "0.89",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "99,0000",
          progress: "100%",
          coinIcon: coinIcon4,
          projectStatus: "upcomming" as ProjectStatusType
        },
        {
          id: 9,
          thumb: projectThumb5,
          title: "Cryowar Two",
          price: "0.45",
          launchedDate: "2024-02-10T01:54:00+07:00",
          totalRised: "99,0000",
          progress: "86%",
          coinIcon: coinIcon5,
          projectStatus: "upcomming" as ProjectStatusType
        }
      ] as ProjectItemType[]
    },

    {
      projectStatus: "past" as ProjectStatusType,
      totalPages: 3,
      projects: [
        {
          id: 10,
          thumb: projectThumb3,
          title: "Meta World",
          price: "0.33",
          launchedDate: "2024-02-04T10:54:00+07:00",
          totalRised: "99,0000",
          progress: "98%",
          coinIcon: coinIcon3,
          projectStatus: "past"
        },
        {
          id: 11,
          thumb: projectThumb2,
          title: "Super Sidero",
          price: "0.13",
          launchedDate: "2024-02-01T01:54:00+07:00",
          totalRised: "483,000",
          progress: "73%",
          coinIcon: coinIcon2,
          projectStatus: "past" as ProjectStatusType
        },
        {
          id: 12,
          thumb: projectThumb1,
          title: "KyberDyne",
          price: "0.59",
          launchedDate: "2024-02-01T01:54:00+07:00",
          totalRised: "100,000",
          progress: "100%",
          coinIcon: coinIcon1,
          projectStatus: "past" as ProjectStatusType
        },

        {
          id: 13,
          thumb: projectThumb4,
          title: "Fisrt Survivor",
          price: "0.89",
          launchedDate: "2024-02-01T01:54:00+07:00",
          totalRised: "82,6000",
          progress: "100%",
          coinIcon: coinIcon4,
          projectStatus: "past" as ProjectStatusType
        },
        {
          id: 14,
          thumb: projectThumb5,
          title: "Cryowar Two",
          price: "0.45",
          launchedDate: "2024-02-01T01:54:00+07:00",
          totalRised: "38,8000",
          progress: "86%",
          coinIcon: coinIcon5,
          projectStatus: "past" as ProjectStatusType
        }
      ] as ProjectItemType[]
    }
  ]
}
