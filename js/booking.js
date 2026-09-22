(() => {
  const dialog = document.createElement('dialog');
  dialog.id = 'bookingDialog';
  dialog.className = 'booking-dialog';
  dialog.setAttribute('aria-labelledby', 'bookingTitle');
  dialog.innerHTML = `
    <div class="booking-shell">
      <button type="button" class="booking-close" aria-label="Đóng form đặt lịch">×</button>
      <div class="booking-heading">
        <span class="booking-eyebrow">TRÒ CHUYỆN CÙNG QUỲNH TRANG</span>
        <h2 id="bookingTitle">Đặt lịch tư vấn</h2>
        <p>Chia sẻ điều bạn quan tâm và thời gian thuận tiện. Quỳnh Trang sẽ cùng bạn trao đổi về bước tiếp theo phù hợp.</p>
      </div>
      <form class="booking-form" id="bookingForm">
        <div class="booking-fields">
          <div class="booking-field">
            <label for="bookingName">Họ và tên <span aria-hidden="true">*</span></label>
            <input id="bookingName" name="name" type="text" autocomplete="name" maxlength="100" placeholder="Tên của bạn" required>
          </div>
          <div class="booking-field">
            <label for="bookingEmail">Email <span aria-hidden="true">*</span></label>
            <input id="bookingEmail" name="email" type="email" autocomplete="email" maxlength="150" placeholder="email@example.com" required>
          </div>
          <div class="booking-field">
            <label for="bookingPhone">Số điện thoại / Zalo <span aria-hidden="true">*</span></label>
            <input id="bookingPhone" name="phone" type="tel" autocomplete="tel" inputmode="tel" maxlength="20" placeholder="Số điện thoại của bạn" required>
          </div>
          <div class="booking-field">
            <label for="bookingInterest">Bạn muốn trao đổi về điều gì? <span aria-hidden="true">*</span></label>
            <select id="bookingInterest" name="interest" required>
              <option value="" selected disabled>Chọn nội dung phù hợp</option>
              <option value="health">Sức khỏe và vóc dáng</option>
              <option value="business">Cơ hội kinh doanh</option>
              <option value="other">Nội dung khác</option>
            </select>
          </div>
          <div class="booking-field booking-field-wide">
            <label for="bookingSource">Bạn biết đến Quỳnh Trang qua đâu? <span class="booking-optional">(không bắt buộc)</span></label>
            <input id="bookingSource" name="source" type="text" maxlength="200" placeholder="Ví dụ: Phi Hà giới thiệu, Facebook, TikTok, sự kiện...">
          </div>
          <div class="booking-field booking-field-wide">
            <label for="bookingMessage">Điều bạn muốn chia sẻ</label>
            <textarea id="bookingMessage" name="message" rows="3" maxlength="1000" placeholder="Bạn đang mong muốn thay đổi điều gì?"></textarea>
          </div>
          <div class="booking-field booking-field-wide">
            <label for="bookingAvailability">Ngày và giờ thuận tiện để trò chuyện <span aria-hidden="true">*</span></label>
            <textarea id="bookingAvailability" name="availability" rows="2" maxlength="300" placeholder="Ví dụ: chiều thứ Ba hoặc sáng thứ Bảy" required></textarea>
            <p class="booking-help">Quỳnh Trang sẽ trao đổi để xác nhận lịch phù hợp với bạn.</p>
          </div>
        </div>
        <label class="booking-consent">
          <input type="checkbox" name="consent" required>
          <span>Tôi đồng ý để Quỳnh Trang liên hệ theo thông tin đã cung cấp về yêu cầu đặt lịch này.</span>
        </label>
        <div class="booking-actions">
          <button type="submit" class="btn btn-primary">Gửi yêu cầu đặt lịch →</button>
        </div>
        <p class="booking-status" id="bookingStatus" role="status" tabindex="-1" hidden>
          Email và Zalo đang được mở. Hãy xác nhận gửi yêu cầu trong cả hai ứng dụng.
        </p>
      </form>
    </div>
  `;
  document.body.appendChild(dialog);

  const form = dialog.querySelector('form');
  const status = dialog.querySelector('#bookingStatus');
  let opener = null;

  function openBooking(trigger = null) {
    opener = trigger?.closest('.sidebar') ? document.getElementById('menuToggle') : trigger;
    status.hidden = true;
    dialog.showModal();
    document.body.classList.add('booking-open');
    dialog.querySelector('#bookingName').focus();
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-booking]');
    if (!trigger) return;
    event.preventDefault();
    openBooking(trigger);
  });

  dialog.querySelector('.booking-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('booking-open');
    opener?.focus();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const interestLabels = {
      health: 'Sức khỏe và vóc dáng',
      business: 'Cơ hội kinh doanh',
      other: 'Nội dung khác',
    };
    const message = [
      'YÊU CẦU ĐẶT LỊCH TƯ VẤN',
      '',
      `Họ và tên: ${value('name')}`,
      `Email: ${value('email')}`,
      `Số điện thoại / Zalo: ${value('phone')}`,
      `Nội dung muốn trao đổi: ${interestLabels[value('interest')] || value('interest')}`,
      `Biết đến Quỳnh Trang qua: ${value('source') || 'Không cung cấp'}`,
      `Điều muốn chia sẻ: ${value('message') || 'Không cung cấp'}`,
      `Thời gian thuận tiện: ${value('availability')}`,
    ].join('\n');
    const subject = `Yêu cầu đặt lịch tư vấn - ${value('name')}`;
    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('vuquynhtrang@coreplus.vn')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const zaloUrl = 'https://zalo.me/0904170485';

    status.hidden = false;
    status.textContent = 'Email và Zalo đang được mở. Nội dung đã được sao chép để bạn dán vào Zalo; hãy xác nhận gửi trong cả hai ứng dụng.';
    status.focus();

    const zaloWindow = window.open(zaloUrl, '_blank', 'noopener,noreferrer');
    if (zaloWindow) zaloWindow.opener = null;

    navigator.clipboard.writeText(message).catch(() => {
      status.textContent = 'Email và Zalo đang được mở. Hãy xác nhận gửi email và nhập nội dung yêu cầu trong Zalo.';
    });

    window.location.href = emailUrl;
  });

  if (window.location.hash === '#booking') openBooking();
})();
