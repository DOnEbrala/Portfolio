<template>
  <div class="experience-page">
    <section class="section hero-section">
      <div class="container">
        <div class="section-title">
          <h1>{{ $t('experience.title') }}</h1>
          <p>{{ $t('experience.subtitle') }}</p>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="experience-section">
          <h2 class="section-subtitle">Work Experience</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(job, index) in experiences" :key="index">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="job-header">
                  <h3>{{ job.position }}</h3>
                  <div class="company">
                    <a :href="job.website" target="_blank" v-if="job.website">{{ job.company }}</a>
                    <span v-else>{{ job.company }}</span>
                  </div>
                  <div class="location" v-if="job.location">{{ job.location }}</div>
                  <div class="department" v-if="job.department">{{ job.department }}</div>
                  <div class="duration">{{ job.startDate }} - {{ job.endDate || $t('experience.present') }}</div>
                </div>
                <div class="job-description">
                  <p>{{ job.description }}</p>
                  <ul class="achievements">
                    <li v-for="achievement in job.achievements" :key="achievement">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                <div class="job-technologies">
                  <span v-for="tech in job.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="education-section">
          <h2 class="section-subtitle">Education</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(edu, index) in education" :key="index">
              <div class="timeline-marker education-marker"></div>
              <div class="timeline-content">
                <div class="job-header">
                  <h3>{{ edu.degree }}</h3>
                  <div class="company">
                    <a :href="edu.website" target="_blank" v-if="edu.website">{{ edu.institution }}</a>
                    <span v-else>{{ edu.institution }}</span>
                  </div>
                  <div class="location" v-if="edu.location">{{ edu.location }}</div>
                  <div class="duration">{{ edu.startDate }} - {{ edu.endDate || $t('experience.present') }}</div>
                  <div class="level" v-if="edu.level">{{ edu.level }}</div>
                </div>
                <div class="job-description">
                  <p>{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="certificates-section">
          <h2 class="section-subtitle">Certificates & Training</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(cert, index) in certificates" :key="index">
              <div class="timeline-marker certificate-marker"></div>
              <div class="timeline-content">
                <div class="job-header">
                  <h3>{{ cert.name }}</h3>
                  <div class="company">
                    <a :href="cert.website" target="_blank" v-if="cert.website">{{ cert.provider }}</a>
                    <span v-else>{{ cert.provider }}</span>
                  </div>
                  <div class="location" v-if="cert.location">{{ cert.location }}</div>
                  <div class="duration">{{ cert.startDate }} - {{ cert.endDate }}</div>
                  <div class="grade" v-if="cert.grade">Grade: {{ cert.grade }}</div>
                </div>
                <div class="job-description">
                  <p>{{ cert.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-languages-section">
          <h2 class="section-subtitle">Additional Skills & Languages</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Programming Languages</h3>
              <div class="skill-tags">
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">C++</span>
                <span class="skill-tag">SQL</span>
              </div>
            </div>
            <div class="skill-category">
              <h3>Other Skills</h3>
              <div class="skill-tags">
                <span class="skill-tag">CCNA1</span>
                <span class="skill-tag">Business</span>
                <span class="skill-tag">Startups</span>
                <span class="skill-tag">Accounting</span>
              </div>
            </div>
            <div class="skill-category">
              <h3>Languages</h3>
              <div class="language-skills">
                <div class="language-item">
                  <h4>Georgian</h4>
                  <span class="language-level native">Native</span>
                </div>
                <div class="language-item">
                  <h4>English</h4>
                  <span class="language-level b2">B2 Level</span>
                  <div class="language-details">
                    <small>Listening B2 • Reading B2 • Writing B2 • Speaking B2</small>
                  </div>
                </div>
                <div class="language-item">
                  <h4>Russian</h4>
                  <span class="language-level c1">C1 Level</span>
                  <div class="language-details">
                    <small>Listening C1 • Reading C1 • Writing C1 • Speaking C1</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          position: 'Front End Developer',
          company: 'BetSolutions',
          location: 'Tbilisi, Georgia',
          website: 'https://betsolutions.com/',
          department: 'IGaming - Business Unit',
          sector: 'Arts, entertainment and recreation',
          startDate: 'November 2023',
          endDate: null,
          description: 'Working as a Front End Developer in the IGaming industry, developing user interfaces for betting and gaming platforms.',
          achievements: [
            'Developed responsive web applications using modern front-end technologies',
            'Implemented interactive gaming interfaces with Vue.js framework',
            'Collaborated with backend teams to integrate APIs and real-time data',
            'Utilized Azure DevOps for project management and deployment processes',
            'Created multilingual applications using Vue i18n for international markets'
          ],
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Vue.js', 'Vue Router', 'Pinia/Vuex', 'Vue i18n', 'Azure DevOps', 'OWL Carousel']
        },
        {
          position: 'IT Engineer/Support',
          company: 'ORIGIN',
          location: 'Tbilisi, Georgia',
          startDate: 'April 2019',
          endDate: 'January 2022',
          description: 'Provided comprehensive IT support and engineering services, specializing in hardware maintenance, remote support, and system administration.',
          achievements: [
            'Hardware & PC Maintenance: PC assembly (including gaming PCs), upgrades, cleaning, troubleshooting, system optimization',
            'Remote Support & Networking: Provided remote assistance using AnyDesk and TeamViewer',
            'Network troubleshooting: Internet connectivity troubleshooting and solutions',
            'Software expertise: Proficient in Adobe Creative Suite, AutoCAD/ArchiCAD, Microsoft Office',
            'Multi-platform support: Windows, Ubuntu, and Linux operating systems'
          ],
          technologies: ['Windows', 'Ubuntu', 'Linux', 'AnyDesk', 'TeamViewer', 'Adobe Creative Suite', 'AutoCAD', 'ArchiCAD', 'Microsoft Office', 'Hardware Assembly', 'Network Troubleshooting']
        }
      ],
      education: [
        {
          institution: 'Georgian National University SEU',
          degree: 'Information Technologies - Bachelor',
          location: 'Tbilisi, Georgia',
          website: 'https://www.seu.edu.ge/',
          startDate: 'September 2024',
          endDate: null,
          level: 'EQF level 3',
          description: 'Currently pursuing Bachelor\'s degree in Information Technologies with focus on modern development practices.'
        },
        {
          institution: 'Business and Technology University',
          degree: 'Information Technologies',
          location: 'Tbilisi, Georgia',
          website: 'https://btu.edu.ge/en/home-english/',
          startDate: 'September 2018',
          endDate: 'June 2024',
          level: 'EQF level 3',
          description: 'Completed comprehensive studies in Information Technologies including fundamentals in Python, SQL, C++, CCNA1, Business, Startups, and Accounting.'
        }
      ],
      certificates: [
        {
          name: 'EPAM - Automation Testing Certificate',
          provider: 'EPAM',
          location: 'Tbilisi, Georgia',
          website: 'https://www.epam.com/',
          startDate: 'January 2022',
          endDate: 'September 2023',
          field: 'Generic programmes and qualifications',
          grade: 'Automated Testing in JavaScript',
          description: 'Comprehensive training in automated testing methodologies using JavaScript.'
        },
        {
          name: 'New Horizon Certificate (Javascript)',
          provider: 'GITA ICT TRAININGS (Georgia\'s Innovation and Technology Agency)',
          location: 'Tbilisi, Georgia',
          website: 'https://gita.gov.ge/',
          startDate: 'June 2022',
          endDate: 'September 2022',
          field: 'Education: Teacher training with subject specialisation Education science',
          grade: 'Javascript Specialist',
          level: 'EQF level 1',
          description: 'Specialized training in JavaScript programming and development practices.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.experience-page {
  padding-top: 70px;
}

.hero-section {
  background: linear-gradient(135deg, rgba($primary, 0.1) 0%, rgba($secondary, 0.1) 100%);
  text-align: center;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    width: 2px;
    height: 100%;
    background: $gray-light;
    
    @media (min-width: $breakpoint-md) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: $spacing-12;
  
  @media (min-width: $breakpoint-md) {
    width: 50%;
    
    &:nth-child(odd) {
      left: 0;
      padding-right: $spacing-8;
      
      .timeline-content {
        text-align: right;
      }
      
      .timeline-marker {
        right: -11px;
      }
    }
    
    &:nth-child(even) {
      left: 50%;
      padding-left: $spacing-8;
      
      .timeline-marker {
        left: -11px;
      }
    }
  }
}

.timeline-marker {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: $primary;
  border: 4px solid $white;
  border-radius: 50%;
  box-shadow: $shadow;
  
  @media (max-width: $breakpoint-md - 1px) {
    left: 20px;
  }
}

.timeline-content {
  background: $white;
  padding: $spacing-6;
  border-radius: $radius-xl;
  box-shadow: $shadow;
  margin-left: $spacing-16;
  
  @media (min-width: $breakpoint-md) {
    margin-left: 0;
  }
}

.job-header {
  margin-bottom: $spacing-4;
  
  h3 {
    color: $primary;
    margin-bottom: $spacing-2;
  }
  
  .company {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $dark;
    margin-bottom: $spacing-1;
  }
  
  .duration {
    color: $gray;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
  }
}

.job-description {
  margin-bottom: $spacing-6;
  
  p {
    margin-bottom: $spacing-4;
  }
}

.achievements {
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: $spacing-6;
    margin-bottom: $spacing-2;
    color: $gray;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: $primary;
      font-weight: $font-weight-bold;
    }
  }
}

.job-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
}

.tech-tag {
  background: $primary;
  color: $white;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  padding: $spacing-1 $spacing-3;
  border-radius: $radius-full;
}

.experience-section,
.education-section,
.certificates-section,
.skills-languages-section {
  margin-bottom: $spacing-20;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.section-subtitle {
  color: $primary;
  text-align: center;
  margin-bottom: $spacing-12;
  font-size: $font-size-3xl;
  
  @media (min-width: $breakpoint-md) {
    font-size: $font-size-4xl;
  }
}

.location,
.department,
.level,
.grade {
  color: $gray;
  font-size: $font-size-sm;
  margin-bottom: $spacing-1;
}

.company a {
  color: $dark;
  text-decoration: none;
  
  &:hover {
    color: $primary;
  }
}

.education-marker {
  background: $secondary;
}

.certificate-marker {
  background: #10b981;
}

.skills-grid {
  display: grid;
  gap: $spacing-8;
  
  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skill-category {
  background: $white;
  padding: $spacing-6;
  border-radius: $radius-xl;
  box-shadow: $shadow;
  text-align: center;
  
  h3 {
    color: $primary;
    margin-bottom: $spacing-4;
    font-size: $font-size-lg;
  }
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  justify-content: center;
}

.skill-tag {
  background: $gray-light;
  color: $dark;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  padding: $spacing-2 $spacing-4;
  border-radius: $radius-full;
  transition: all $transition-fast;
  
  &:hover {
    background: $primary;
    color: $white;
  }
}

.language-skills {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.language-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  h4 {
    color: $dark;
    margin-bottom: $spacing-2;
    font-size: $font-size-base;
  }
}

.language-level {
  padding: $spacing-1 $spacing-3;
  border-radius: $radius-full;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  margin-bottom: $spacing-2;
  
  &.native {
    background: #10b981;
    color: $white;
  }
  
  &.c1 {
    background: $primary;
    color: $white;
  }
  
  &.b2 {
    background: $secondary;
    color: $white;
  }
}

.language-details {
  small {
    color: $gray;
    font-size: $font-size-xs;
    line-height: 1.4;
  }
}
</style>
