/**
 * Coach Ritu Oberoi Nutrition Club - Interactive Engine
 * Designed for High-Intent Lead Generation & Frictionless WhatsApp Inquiries
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Mobile Drawer Navigation
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  /* --------------------------------------------------------------------------
     2. Header Elevation on Scroll
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
    } else {
      siteHeader.style.boxShadow = 'none';
    }
  });

  /* --------------------------------------------------------------------------
     3. Goal Chips Selector Logic
     -------------------------------------------------------------------------- */
  const goalChips = document.querySelectorAll('.goal-chip');
  goalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      goalChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const radio = chip.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  /* --------------------------------------------------------------------------
     4. Interactive Health & BMI Assessment Calculator
     -------------------------------------------------------------------------- */
  const calcBtn = document.getElementById('calcBtn');
  const bmiResultBox = document.getElementById('bmiResultBox');
  const resBmi = document.getElementById('resBmi');
  const bmiStatusBadge = document.getElementById('bmiStatusBadge');
  const resBmiCategory = document.getElementById('resBmiCategory');
  const resIdealWeight = document.getElementById('resIdealWeight');
  const resWeightDiff = document.getElementById('resWeightDiff');
  const resTargetSummary = document.getElementById('resTargetSummary');
  const coachObservationText = document.getElementById('coachObservationText');
  const waReportBtn = document.getElementById('waReportBtn');

  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      // Inputs
      const selectedGoalInput = document.querySelector('input[name="goal"]:checked');
      const goal = selectedGoalInput ? selectedGoalInput.value : 'Weight Loss';
      const gender = document.getElementById('userGender').value;
      const age = parseInt(document.getElementById('userAge').value, 10) || 30;
      const heightCm = parseFloat(document.getElementById('userHeight').value) || 165;
      const weightKg = parseFloat(document.getElementById('userWeight').value) || 75;
      const targetKg = parseFloat(document.getElementById('userTargetWeight').value) || 60;
      const city = document.getElementById('userCity').value.trim() || 'India';

      // Calculations
      const heightM = heightCm / 100;
      const bmi = (weightKg / (heightM * heightM)).toFixed(1);

      // Ideal Weight Range (BMI 18.5 - 24.9)
      const minIdeal = (18.5 * (heightM * heightM)).toFixed(0);
      const maxIdeal = (24.9 * (heightM * heightM)).toFixed(0);

      // Weight Difference
      const diff = (weightKg - targetKg).toFixed(1);

      // BMI Status Category
      let category = 'Normal';
      let badgeColor = '#10B981';

      if (bmi < 18.5) {
        category = 'Underweight';
        badgeColor = '#3B82F6';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Healthy Weight';
        badgeColor = '#10B981';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        badgeColor = '#F59E0B';
      } else {
        category = 'Obese';
        badgeColor = '#EF4444';
      }

      // Dynamic Personalized Observation from Coach Ritu based on exact inputs
      // Pushing 1-on-1 personal consultation on WhatsApp rather than BTC
      const diffVal = parseFloat(diff);
      const isFemale = gender.toLowerCase() === 'female';
      let observation = '';

      if (goal.includes('PCOS') || goal.includes('Hormonal') || goal.includes('Thyroid')) {
        if (isFemale && age >= 45) {
          observation = `Hormonal shifts during perimenopause or post-menopause naturally slow down your resting metabolic rate, causing stubborn fat storage around the waist and hips. Crash diets and excessive cardio only spike cortisol and deplete bone density. To safely release these ${diffVal > 0 ? diffVal + ' kg' : 'inches'}, we must focus on estrogen-balancing cellular micro-nutrients, clean plant protein, and deep cellular hydration. Let's speak 1-on-1 on WhatsApp so I can design a gentle, hormone-supportive daily routine tailored to your schedule.`;
        } else {
          observation = `With PCOS and hormonal resistance, stubborn weight gain - especially around the lower belly - is driven by insulin spikes and metabolic inflammation, not a lack of willpower. Skipping meals or extreme calorie deficits will only disrupt your cycles further. To safely drop these ${diffVal > 0 ? diffVal + ' kg' : 'inches'}, we must nourish your endocrine cells with bioavailable protein and balanced cellular breakfast nutrition. Connect with me directly on WhatsApp so I can review your routine and craft your personalized hormonal wellness plan.`;
        }
      } else if (goal.includes('Digestive') || goal.includes('Gut')) {
        observation = `Digestive discomfort, acidity, irregular bowel regularity, and afternoon fatigue often indicate that your gut microbiome needs gentle rebalancing. When your body cannot absorb daily nutrients smoothly, energy levels dip and natural metabolic balance is affected. Through soothing herbal aloe, active dietary fiber, and cellular reset nutrition, we can comfortably revitalize your digestive comfort. Chat with me 1-on-1 on WhatsApp so we can assess your routine and map out a gentle gut-nourishing protocol.`;
      } else if (goal.includes('Skin') || goal.includes('Acne') || goal.includes('Radiance')) {
        observation = `Healthy skin radiance begins with internal cellular hydration and balanced nutrition. Rather than relying solely on external creams, real lasting radiance happens when we nourish your body from within with optimal hydration, clean antioxidants, and essential micronutrients. Reach out to me directly on WhatsApp so I can evaluate your daily water intake, diet, and guide you on a personalized inner cellular glow protocol.`;
      } else if (goal.includes('Child') || goal.includes('Teen') || age < 19) {
        observation = `Children and adolescents are in a vital growth phase where their bodies need clean, balanced micronutrients every morning. Strict dieting is strictly unadvisable as young bodies need wholesome nourishment for active stamina, scholastic focus, and natural immunity. Our family cellular shake protocol delivers essential vitamins and minerals without empty sugars. Connect with me personally on WhatsApp so we can discuss a tasty, wholesome routine for your child.`;
      } else if (goal.includes('Gain') || goal.includes('Muscle') || bmi < 18.5) {
        observation = `Your BMI of ${bmi} indicates that your body will benefit from nourishing, lean muscle building and immune support. Trying to gain weight by eating oily or high-sugar foods does not build healthy stamina or natural energy. What you need is clean, bioavailable cellular protein, complex carbohydrates, and dense micronutrients to safely build ${Math.abs(diffVal)} kg of solid lean muscle. Connect with me directly on WhatsApp so I can curate a high-density, easily digestible nutrition protocol for you.`;
      } else if (age >= 52) {
        observation = `At age ${age}, carrying an extra ${diffVal > 0 ? diffVal + ' kg' : 'weight'} places added mechanical pressure on your knee joints, spine, and daily stamina. Heavy gym workouts or skipping meals are strictly unsafe. We focus on gentle, restorative cellular nutrition that protects lean muscle, supports joint comfort, and safely helps you feel light and active. Let's talk 1-on-1 on WhatsApp so I can guide you through a comfortable daily wellness routine.`;
      } else if (goal.includes('Belly') || goal.includes('Inch')) {
        if (diffVal <= 0 || bmi < 24.9) {
          observation = `Your overall weight is in a healthy range, and toning your midsection is easily achievable with consistent protein pacing and proper morning hydration. Spot exercises alone won't tone the waist without cellular metabolic support. By replacing high-carb breakfasts with a light, nutrient-dense cellular shake, you can trim those inches while maintaining lean muscle tone. Chat with me 1-on-1 on WhatsApp so we can review your daily eating schedule.`;
        } else {
          observation = `Carrying extra inches around the midsection is common when metabolism slows down due to irregular eating hours or stress. This responds quickly when cellular nutrition balances your morning metabolism and provides sustained energy. Dropping these ${diffVal} kg will take immediate pressure off your waist and leave you feeling light and energized. Connect with me directly on WhatsApp so I can customize an inch-loss roadmap for you.`;
        }
      } else if (diffVal >= 15 || bmi >= 30) {
        observation = `Carrying ${diffVal} kg of excess weight indicates that your metabolism has been running below its optimal efficiency, leading to tiredness and extra strain on your joints. Generic crash diets or skipping meals will only lower your energy further. A safe, lasting transformation comes from 1-on-1 root-cause mentorship and balanced cellular nutrition. Reach out to me directly on WhatsApp today - let's connect 1-on-1, review your routine, and begin your sustainable wellness journey!`;
      } else if (diffVal >= 6) {
        observation = `To comfortably drop these ${diffVal} kg and sustain your results for life, the secret is balanced morning nutrition. When you fuel your body each morning with complete cellular nutrition delivering essential vitamins and protein, midday cravings and afternoon fatigue vanish naturally while your body burns energy efficiently. Let's talk 1-on-1 on WhatsApp so I can design your exact personalized daily meal routine.`;
      } else if (diffVal > 0) {
        observation = `You are already very close to your ideal weight! Shedding these final ${diffVal} kg requires metabolic fine-tuning rather than harsh calorie cuts. We focus on tightening loose skin, shedding subcutaneous water retention, and boosting cellular stamina. Let's connect 1-on-1 on WhatsApp so I can give you specific habit tweaks to break through your current plateau and achieve your dream fitness.`;
      } else {
        observation = `Congratulations on maintaining an optimal body weight! Your primary focus now should be metabolic longevity, cellular anti-aging, strengthening core stamina, and protecting vital organs. With personalized cellular nutrition, you can keep your energy high and stay fit, youthful, and vibrant for decades. Reach out to me on WhatsApp so we can discuss an effortless daily maintenance routine tailored to your schedule.`;
      }

      // Update UI
      resBmi.textContent = bmi;
      bmiStatusBadge.textContent = category;
      bmiStatusBadge.style.backgroundColor = badgeColor;
      resBmiCategory.textContent = `Category: ${category}`;
      resIdealWeight.textContent = `${minIdeal} - ${maxIdeal} kg`;

      if (diff > 0) {
        resWeightDiff.textContent = `-${diff} kg`;
        resTargetSummary.textContent = `Personalized 1-on-1 Coaching Target`;
      } else if (diff < 0) {
        resWeightDiff.textContent = `+${Math.abs(diff)} kg`;
        resTargetSummary.textContent = `Target Healthy Lean Muscle Rebuild`;
      } else {
        resWeightDiff.textContent = `0 kg`;
        resTargetSummary.textContent = `Target Metabolic Toning & Vitality`;
      }

      coachObservationText.textContent = observation;

      // Generate Customized WhatsApp Message (Pushing 1-on-1 conversation with Coach)
      const waText = `Hi Coach Ritu! 👋

I just completed the Free Health Assessment on your website:
• Goal: ${goal}
• Gender & Age: ${gender}, ${age} yrs
• Height & Weight: ${heightCm} cm | ${weightKg} kg
• Target Weight: ${targetKg} kg (${diff > 0 ? '-' + diff + ' kg' : '+' + Math.abs(diff) + ' kg'})
• Calculated BMI: ${bmi} (${category})
• Location: ${city}

Coach Ritu, I would love your personal 1-on-1 guidance on my nutrition and metabolism. Please share what you recommend for my body!`;

      const encodedWaUrl = `https://wa.me/919311965068?text=${encodeURIComponent(waText)}`;
      waReportBtn.href = encodedWaUrl;

      // Reveal Result Box and Scroll
      bmiResultBox.style.display = 'block';
      bmiResultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* --------------------------------------------------------------------------
     5. BTC Marathon Live Countdown Timer
     -------------------------------------------------------------------------- */
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  if (daysEl && hoursEl && minsEl && secsEl) {
    // Target next upcoming cohort: January 1st Week (Monday, Jan 4th 8:00 AM)
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    // If we're already past the 1st week of Jan, target next Jan; otherwise target this coming Jan
    const targetYear = (currentMonth === 0 && new Date().getDate() < 4) ? currentYear : currentYear + 1;
    let targetDate = new Date(targetYear, 0, 4, 8, 0, 0).getTime();

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      let distance = targetDate - currentTime;

      if (distance < 0) {
        // If reached, set to next year
        targetDate = new Date(targetYear + 1, 0, 4, 8, 0, 0).getTime();
        distance = targetDate - currentTime;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(minutes).padStart(2, '0');
      secsEl.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* --------------------------------------------------------------------------
     6. Transformation Gallery Filter Tabs & Mobile Show More
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const transCards = document.querySelectorAll('.trans-card');
  const loadMoreBtn = document.getElementById('loadMoreTransBtn');
  const loadMoreWrap = document.getElementById('loadMoreWrap');
  let isMobileExpanded = false;

  function updateMobileCardVisibility() {
    const isMobile = window.innerWidth <= 768;
    const activeBtn = document.querySelector('.filter-btn.active');
    const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

    if (isMobile && !isMobileExpanded && activeFilter === 'all') {
      transCards.forEach((card, index) => {
        if (index < 6) {
          card.classList.remove('trans-hidden-mobile');
        } else {
          card.classList.add('trans-hidden-mobile');
        }
      });
      if (loadMoreWrap) loadMoreWrap.style.display = 'flex';
      if (loadMoreBtn) loadMoreBtn.innerHTML = '<span>View 14 More Client Stories</span> <i class="fa-solid fa-chevron-down"></i>';
    } else {
      transCards.forEach(card => card.classList.remove('trans-hidden-mobile'));
      if (loadMoreWrap) {
        if (isMobile && isMobileExpanded && activeFilter === 'all') {
          loadMoreWrap.style.display = 'flex';
          loadMoreBtn.innerHTML = '<span>Show Less</span> <i class="fa-solid fa-chevron-up"></i>';
        } else {
          loadMoreWrap.style.display = 'none';
        }
      }
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      isMobileExpanded = !isMobileExpanded;
      updateMobileCardVisibility();
      if (!isMobileExpanded) {
        document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Initial check and on window resize
  updateMobileCardVisibility();
  window.addEventListener('resize', updateMobileCardVisibility);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      transCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const categories = category.trim().split(/\s+/);
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'slide-up 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });

      if (filterValue !== 'all') {
        transCards.forEach(card => card.classList.remove('trans-hidden-mobile'));
        if (loadMoreWrap) loadMoreWrap.style.display = 'none';
      } else {
        updateMobileCardVisibility();
      }
    });
  });

  /* --------------------------------------------------------------------------
     7. Lightbox Modal for Transformation Images
     -------------------------------------------------------------------------- */
  const imageModal = document.getElementById('imageModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  transCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('h4')?.textContent || 'Client Transformation';
      const desc = card.querySelector('p')?.textContent || '';

      if (img && imageModal) {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalCaption.innerHTML = `<strong>${title}</strong><p style="margin-top: 6px; font-size: 0.9rem; color: #64748B;">${desc}</p>`;
        imageModal.classList.add('open');
        imageModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (imageModal) {
      imageModal.classList.remove('open');
      imageModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* --------------------------------------------------------------------------
     8. FAQ Accordion Toggle
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: close other open items for accordion behavior
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* --------------------------------------------------------------------------
     9. Dynamic Time-Based Greeting for Floating WhatsApp
     -------------------------------------------------------------------------- */
  const waTooltipText = document.querySelector('.wa-tooltip-text');
  if (waTooltipText) {
    const currentHour = new Date().getHours();
    let greeting = 'Hello!';
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
    waTooltipText.textContent = `"${greeting} Looking to lose weight permanently, join our BTC Marathon, or fix your gut health? Chat with Coach Ritu right now for free guidance!"`;
  }

  /* --------------------------------------------------------------------------
     10. Section 2 Auto-Scrolling Marquee Controls & Modal Link
     -------------------------------------------------------------------------- */
  const marqueeWrapper = document.getElementById('marqueeWrapper');
  const scrollPrev = document.getElementById('scrollPrev');
  const scrollNext = document.getElementById('scrollNext');
  const marqueeCards = document.querySelectorAll('.marquee-card');

  if (scrollPrev && scrollNext && marqueeWrapper) {
    scrollPrev.addEventListener('click', () => {
      marqueeWrapper.scrollBy({ left: -320, behavior: 'smooth' });
    });

    scrollNext.addEventListener('click', () => {
      marqueeWrapper.scrollBy({ left: 320, behavior: 'smooth' });
    });

    // Drag-to-scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    marqueeWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      marqueeWrapper.style.cursor = 'grabbing';
      startX = e.pageX - marqueeWrapper.offsetLeft;
      scrollLeft = marqueeWrapper.scrollLeft;
    });

    marqueeWrapper.addEventListener('mouseleave', () => {
      isDown = false;
      marqueeWrapper.style.cursor = 'grab';
    });

    marqueeWrapper.addEventListener('mouseup', () => {
      isDown = false;
      marqueeWrapper.style.cursor = 'grab';
    });

    marqueeWrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marqueeWrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      marqueeWrapper.scrollLeft = scrollLeft - walk;
    });
  }

  // Marquee card lightbox viewer
  marqueeCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'Client Transformation';
      const desc = card.getAttribute('data-desc') || '';

      if (img && imageModal) {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalCaption.innerHTML = `<strong>${title}</strong><p style="margin-top: 6px; font-size: 0.9rem; color: #64748B;">${desc}</p>`;
        imageModal.classList.add('open');
        imageModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

});
