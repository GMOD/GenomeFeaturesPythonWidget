FROM zcalusic/debian-stretch

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -qq update --fix-missing && \
	apt-get --no-install-recommends -y install \
	curl git python3 python3-pip sudo vim python3-setuptools



RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get -qq update --fix-missing && \
	apt-get --no-install-recommends -y install nodejs && \
	apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


RUN useradd -ms /bin/bash -d /ubuntu ubuntu
RUN chown -R ubuntu:ubuntu /ubuntu
WORKDIR /ubuntu
RUN sudo adduser ubuntu sudo

USER ubuntu

RUN git clone https://github.com/GMOD/GenomeFeatureComponent.git
WORKDIR /ubuntu/GenomeFeatureComponent
RUN npm i && npm run build



WORKDIR /ubuntu
RUN git clone https://github.com/nathandunn/genomefeatures.git
WORKDIR /ubuntu/genomefeatures
RUN pip3 install -e .

RUN pip3 install jupyter

RUN /ubuntu/.local/bin/jupyter nbextension install --py --symlink --sys-prefix genomefeatures
RUN /ubuntu/.local/bin/jupyter nbextension enable --py --sys-prefix genomefeatures



