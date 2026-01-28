export default function TrendingLocationsGrid() {
  return (
    <section className="bg-white dark:bg-slate-900 py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Trending Locations</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Discover the cities everyone is talking about
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB82F58zxpLkqIQbtw5ayxMieFeDOspgsrcLRhflH10yLiTakwUT9aSXgAL1mSben1_0ObimPMQkXsLLf458tOSMnS0hYrhVCxRaWX1E0CYPEbiX1PynVenO8zpVkt0ewVvfTVMXwNmo8IRVWaDoBgsoVqxv_AXDhEUMcVGtjCAwlsh8IdEZO2jvUOyXTdPL-905TrspJFMbJ8w-cQmp5Q426FFZm1MfkXXvDzgVZQu6D9csAXotCA02UdCDmw0pIe8AC9nI4JSJrw')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h5 className="text-white text-3xl font-bold">Paris</h5>
              <p className="text-white/80 text-sm">2,450+ properties</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiQ3eE6kKMjJj8gXJRIEUURvPsZC5SMHloU6AYUQ-69jxfhoTHG-IajW0S8POhXJGFySvVHz4ukPOW3eJRSdwvRsxXwspBP9k9fLcqQhc-Gdqj3GTL_YsS7cpQZzOCfwg7pKeudRAVZ6f8McCNwxf0rq5AyaOzvOJ678_lVX3IQM3iuq8L8mb79Tt7Nnw90zVOgJQ-sbkJKNR4GqCC-ev6O9uLToCntPbdEwzcv2fiAbACyzcAYNOR_rupiqJhR1n44AIYuXUIH7Y')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h5 className="text-white text-2xl font-bold">Tokyo</h5>
              <p className="text-white/80 text-sm">1,890+ properties</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAal3La73A6Ds5Ib4jtZ2ZyYbYKgtZeG3exbJV_oq7iVgDNEGYPbxVaOEg-_RPkLnzMyQbTFq049cgCuOGB2TE_m5OInrRa09-0BjfgsZ12DWlu3OAjRuTXiU7z3ietBtu1tQ-z1u7VqgJkpXwGeS8ZPbsH55rWIwAa7TwQhBfUw2ZjysUxHvwaLSD_ZkcuZDo3Egun3JouuZ79HUdWYbpflCiH8gz8G3jnAnGAEbrRMXmOnPrs6rIF7IeLPwgOTjbssyd1lgMhXsA')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h5 className="text-white text-2xl font-bold">Venice</h5>
              <p className="text-white/80 text-sm">940+ properties</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnEWtXEk2yOExWbBQPOH03mffY8duTrkt5UMU_dD2ekw98A-TgAD29sGqVi8WKEQhX5qPMpu2OQ9I4Qq60tMsujmYSn8ckCCxZvXZiXAYsWikh4x1L1ALkHZGN1fImf9iuv3BvnYDnLD3yctvHhpsqglwyzZDovviIr_D_hMrSFaW3VdKPHApk1N46kqIM7dmybjBSKKYALkg1Ob9ifm1SdJUPW9nvU9EYESAG8FwPEvliHG9dP2tzgGbQV2HWS4nZC-4_-ouCwnM')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h5 className="text-white text-2xl font-bold">Banff</h5>
              <p className="text-white/80 text-sm">420+ properties</p>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDArFgQrpg3_BHQrPg8YqLrOF2Iwq6NJAvquPiGaDGD_NrPS696VucHO9s4AeEkFadnFlDkd7-uo5jbO5zJGQ9J1OlMaH0gMLPZs9rYz8yjRYwPHeUmLnBaX2D-bJZLIUSQ-m4C57I8zui3Tbt5ys1lW5YeKMhrLjTDw7WyKTrxOuZASDGK5MRmgATcmdt2x6oLj0TBjVPs9NcI35HD7BiXlMLQ_9DDdHqAOciSvY4Jm_nVX_Of6tnUXC25-bdccmqXLWnjFIG3hhs')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h5 className="text-white text-3xl font-bold">Dubai</h5>
              <p className="text-white/80 text-sm">3,120+ properties</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaoUkb1_XJ3w7eyY7gvxPvVBxKH0gryjq6NLlFZybF4a_9w-NwmarrqcmtsaSwKLYqh8QfZtrtxP8jvZ-uye-sJK-gJEPESyitzMUOQZENJiBh8kvMs_IhH47M_o-NzkB2lQtgx1puMbMQldEb-DK2V_nlDvZI5b1Z9RCtbXgCRBaISlEgbrJ2IEFnxUREDJ8K2YejFJxz5BX04gLw-kj_d2iyuoYTM-ogjE6zZ9paTB2jmNIjSSU32gjA9q6rYgBX4Mv64Ti2R3U')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h5 className="text-white text-2xl font-bold">Bali</h5>
              <p className="text-white/80 text-sm">5,600+ properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
